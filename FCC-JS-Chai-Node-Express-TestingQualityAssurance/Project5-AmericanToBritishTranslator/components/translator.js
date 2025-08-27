const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require('./british-only.js');

class Translator {
  translateAmericanToBritish(text) {
    let translatedText = text;
    const translations = {};

    // Handle American to British Spelling
    for (const [american, british] of Object.entries(americanToBritishSpelling)) {
      const regex = new RegExp(`\\b${this.escapeRegex(american)}\\b`, 'gi');
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, british);
        translations[american] = british;
      }
    }

    // Handle American Only terms
    for (const [american, british] of Object.entries(americanOnly)) {
      const regex = new RegExp(`\\b${this.escapeRegex(american)}\\b`, 'gi');
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, british);
        translations[american] = british;
      }
    }

    // Handle American Titles (Dr. -> Dr)
    console.log('Checking American titles...');
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
      console.log(`Checking title: "${american}" -> "${british}"`);
      // Use a different regex pattern that works better with periods
      const regex = new RegExp(`(^|\\s)${this.escapeRegex(american)}(?=\\s|$)`, 'gi');
      console.log(`Regex: ${regex}`);
      console.log(`Text to check: "${translatedText}"`);
      if (regex.test(translatedText)) {
        console.log(`Found title: "${american}"`);
        // Find all matches and replace them while preserving case
        translatedText = translatedText.replace(regex, (match, space) => {
          // Preserve the case of the first letter
          if (american[0] === american[0].toUpperCase()) {
            return space + british.charAt(0).toUpperCase() + british.slice(1);
          } else {
            return space + british;
          }
        });
        translations[american] = british;
        console.log(`Updated text: "${translatedText}"`);
      } else {
        console.log(`Title "${american}" not found`);
      }
    }

    // Handle American Time (10:30 -> 10.30)
    const timeRegex = /(\d{1,2}):(\d{2})/g;
    const timeMatches = translatedText.match(timeRegex);
    if (timeMatches) {
      timeMatches.forEach(time => {
        const britishTime = time.replace(':', '.');
        translatedText = translatedText.replace(time, britishTime);
        translations[time] = britishTime;
      });
    }

    if (Object.keys(translations).length === 0) {
      return "Everything looks good to me!";
    }

    return this.highlightTranslation(text, translatedText, translations);
  }

  translateBritishToAmerican(text) {
    let translatedText = text;
    const translations = {};

    // Handle British Only terms
    for (const [british, american] of Object.entries(britishOnly)) {
      const regex = new RegExp(`\\b${this.escapeRegex(british)}\\b`, 'gi');
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, american);
        translations[british] = american;
      }
    }

    // Handle British to American Spelling (reverse of americanToBritishSpelling)
    for (const [american, british] of Object.entries(americanToBritishSpelling)) {
      const regex = new RegExp(`\\b${this.escapeRegex(british)}\\b`, 'gi');
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, american);
        translations[british] = american;
      }
    }

    // Handle British Titles (Dr -> Dr.)
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
      const regex = new RegExp(`(^|\\s)${this.escapeRegex(british)}(?=\\s|$)`, 'gi');
      if (regex.test(translatedText)) {
        // Find all matches and replace them while preserving case
        translatedText = translatedText.replace(regex, (match, space, title) => {
          // Preserve the case of the first letter
          if (title[0] === title[0].toUpperCase()) {
            return space + american.charAt(0).toUpperCase() + american.slice(1);
          } else {
            return space + american;
          }
        });
        translations[british] = american;
      }
    }

    // Handle British Time (10.30 -> 10:30)
    const timeRegex = /(\d{1,2})\.(\d{2})/g;
    const timeMatches = translatedText.match(timeRegex);
    if (timeMatches) {
      timeMatches.forEach(time => {
        const americanTime = time.replace('.', ':');
        translatedText = translatedText.replace(time, americanTime);
        translations[time] = americanTime;
      });
    }

    if (Object.keys(translations).length === 0) {
      return "Everything looks good to me!";
    }

    return this.highlightTranslation(text, translatedText, translations);
  }

  highlightTranslation(original, translated, translations) {
    let highlightedText = original;
    
    // Sort translations by length (longest first) to avoid partial replacements
    const sortedTranslations = Object.entries(translations).sort((a, b) => b[0].length - a[0].length);
    
    for (const [originalWord, translatedWord] of sortedTranslations) {
      // Find the original word in the original text and highlight it
      const escapedOriginalWord = this.escapeRegex(originalWord);
      const regex = new RegExp(escapedOriginalWord, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="highlight">${translatedWord}</span>`);
    }
    
    return highlightedText;
  }

  escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

module.exports = Translator;