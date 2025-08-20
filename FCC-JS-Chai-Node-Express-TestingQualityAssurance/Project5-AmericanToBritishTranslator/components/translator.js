const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')
const britishToAmericanTitles = require("./british-to-american-titles.js") // Added this require

class Translator {
  constructor() {
    // Reverse object key/value pairs
    const reverseDict = (obj) =>
      Object.assign({}, ...Object.entries(obj).map(([k, v]) => ({ [v]: k })));

    // American/British dictionary
    this.americanBritishDict = {
      ...americanOnly,
      ...americanToBritishSpelling,
    };

    // British/American dictionary
    this.reverseAmericanToBritishSpelling = reverseDict(americanToBritishSpelling);

    this.britishAmericanDict = {
      ...britishOnly,
      ...this.reverseAmericanToBritishSpelling,
    };

    // Titles dictionaries
    this.americanToBritishTitles = americanToBritishTitles;
    this.britishToAmericanTitles = britishToAmericanTitles; // Using the new require

    // Time regexes
    this.americanTimeRegex = /([1-9]|1[012]):[0-5][0-9]/g;
    this.britishTimeRegex = /([1-9]|1[012]).[0-5][0-9]/g;
  }

  translate(str, locale) {
    const originalStr = str;
    const lowerCasedOriginalStr = originalStr.toLowerCase();
    const translationType = locale;

    const dict =
      translationType === "american-to-british"
        ? this.americanBritishDict
        : this.britishAmericanDict;

    const titlesHonorificsDict =
      translationType === "american-to-british"
        ? this.americanToBritishTitles
        : this.britishToAmericanTitles;

    const timeRegex =
      translationType === "american-to-british"
        ? this.americanTimeRegex
        : this.britishTimeRegex;

    const matchesMap = {};

    // Search for titles/honorifics and add'em to the matchesMap object
    Object.entries(titlesHonorificsDict).forEach(([k, v]) => { // Changed map to forEach
      // Use a more robust regex to match titles at the start of a sentence or after a space
      const titleRegex = new RegExp(`(^|\\s)${k.replace(/\./g, '\\.')}(?=\\s|$)`, 'gi');
      const match = originalStr.match(titleRegex);
      if (match) {
        match.forEach(m => {
           // Preserve original capitalization of the matched title when storing in matchesMap
          matchesMap[m.trim()] = v;
        });
      }
    });

    // Search for spaced word matches and add'em to the matchesMap object
    const wordsWithSpace = Object.fromEntries(
      Object.entries(dict).filter(([k, v]) => k.includes(" "))
    );

    Object.entries(wordsWithSpace).forEach(([k, v]) => { // Changed map to forEach
       const regex = new RegExp(`\\b${k.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b`, 'gi'); // Escape special characters and use word boundaries
        const match = originalStr.match(regex);
        if(match) {
          match.forEach(m => {
             matchesMap[m.toLowerCase()] = v; // Store with lowercase key
          });
        }
    });

    // Search for individual word matches and add'em to the matchesMap object
    originalStr // Operate on originalStr to maintain capitalization
      .match(/(\w+([-'])(\w+)?['-]?(\w+))|\w+/g)
      .forEach((word) => { // Changed map to forEach
        const lowerWord = word.toLowerCase();
        if (dict[lowerWord]) {
          matchesMap[lowerWord] = dict[lowerWord];
        }
      });

    // Search for time matches and add'em to the matchesMap object
    const matchedTimes = originalStr.match(timeRegex); // Operate on originalStr

    if (matchedTimes) {
      matchedTimes.forEach((e) => { // Changed map to forEach
        if (translationType === "american-to-british") {
          matchesMap[e] = e.replace(":", ".");
        } else {
          matchesMap[e] = e.replace(".", ":");
        }
      });
    }

    // No matches
    if (Object.keys(matchesMap).length === 0) {
      return "Everything looks good to me!";
    }

    // Return logic
    return this.replaceAllWithHighlight(originalStr, matchesMap);
  }

  replaceAllWithHighlight(str, mapObj) {
    // Create a regex that matches all the keys in the map, ordered by length (longest first)
    const sortedKeys = Object.keys(mapObj).sort((a, b) => b.length - a.length);
    const re = new RegExp(sortedKeys.map(key => key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')).join("|"), "gi"); // Escape special characters

    return str.replace(re, (matched) => {
      const lowerMatched = matched.toLowerCase();
      // Find the corresponding original key in the matchesMap (case-insensitive lookup for replacement)
      const originalKey = sortedKeys.find(key => key.toLowerCase() === lowerMatched);
      if (originalKey && mapObj[originalKey.toLowerCase()]) { // Use lowercase for mapObj lookup too
           // Preserve original capitalization for titles if the translated word is a title
          if (Object.values(this.americanToBritishTitles).includes(mapObj[originalKey.toLowerCase()]) || Object.values(this.britishToAmericanTitles).includes(mapObj[originalKey.toLowerCase()])) {
             const translatedTitle = mapObj[originalKey.toLowerCase()];
             // Match original title capitalization
             if (matched.match(/^[A-Z]/)) { // Check if original matched word starts with a capital letter
                return `<span class='highlight'>${translatedTitle.charAt(0).toUpperCase() + translatedTitle.slice(1)}</span>`;
             }
             return `<span class='highlight'>${translatedTitle}</span>`;
          }

        return `<span class='highlight'>${mapObj[originalKey.toLowerCase()]}</span>`;
      }
      return matched; // Should not happen if logic is correct, but return matched as fallback
    });
  }
}

module.exports = Translator;