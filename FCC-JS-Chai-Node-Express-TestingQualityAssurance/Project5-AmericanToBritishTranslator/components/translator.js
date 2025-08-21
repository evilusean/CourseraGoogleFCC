const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  // Helper function to find and replace translations
  findAndReplace(text, dictionary, locale) {
    let translatedText = text;
    const translations = {};
    const sortedDictionary = Object.entries(dictionary).sort(([, a], [, b]) => b.length - a.length);

    for (const [american, british] of sortedDictionary) {
      const originalTerm = locale === 'american-to-british' ? american : british;
      const translatedTerm = locale === 'american-to-british' ? british : american;

      // Handle titles separately with lookbehind and lookahead for word boundaries and sentence start
      if (americanToBritishTitles.hasOwnProperty(american) || Object.values(americanToBritishTitles).includes(british)) {
        const escapedOriginalTerm = originalTerm.replace('.', '\\.');
        const titleRegex = new RegExp(`(^|\\s)${escapedOriginalTerm}`, 'g');

        translatedText = translatedText.replace(titleRegex, (match, p1) => {
          // Preserve original capitalization for titles
          const originalCapitalized = originalTerm.charAt(0).toUpperCase() + originalTerm.slice(1);
          const translatedCapitalized = translatedTerm.charAt(0).toUpperCase() + translatedTerm.slice(1);

          // Check if the matched title is capitalized in the original text
          if (match.includes(originalCapitalized)) {
            translations[match.trim()] = translatedCapitalized;
            return `${p1}<span class="highlight">${translatedCapitalized}</span>`;
          } else {
             translations[match.trim()] = translatedTerm;
             return `${p1}<span class="highlight">${translatedTerm}</span>`;
          }
        });

      } else {
         // Handle other terms with word boundaries
         const regex = new RegExp(`\\b${originalTerm}\\b`, 'g');
         translatedText = translatedText.replace(regex, (match) => {
            // Preserve original capitalization for non-titles if the entire word is capitalized
            if (match === originalTerm.toUpperCase()) {
               translations[match] = translatedTerm.toUpperCase();
               return `<span class="highlight">${translatedTerm.toUpperCase()}</span>`;
            }
            // Preserve original capitalization if only the first letter is capitalized
            if (match === originalTerm.charAt(0).toUpperCase() + originalTerm.slice(1)) {
                translations[match] = translatedTerm.charAt(0).toUpperCase() + translatedTerm.slice(1);
                 return `<span class="highlight">${translatedTerm.charAt(0).toUpperCase() + translatedTerm.slice(1)}</span>`;
            }
             translations[match] = translatedTerm;
             return `<span class="highlight">${translatedTerm}</span>`;
         });
      }
    }
    return { translatedText, translations };
  }

  translateAmericanToBritish(text) {
    let translatedText = text;
    let allTranslations = {};

    // Handle American to British Spelling
    const spellingResult = this.findAndReplace(translatedText, americanToBritishSpelling, 'american-to-british');
    translatedText = spellingResult.translatedText;
    allTranslations = { ...allTranslations, ...spellingResult.translations };

    // Handle American Only terms
    const americanOnlyResult = this.findAndReplace(translatedText, americanOnly, 'american-to-british');
    translatedText = americanOnlyResult.translatedText;
    allTranslations = { ...allTranslations, ...americanOnlyResult.translations };

    // Handle American Titles
    const titlesResult = this.findAndReplace(translatedText, americanToBritishTitles, 'american-to-british');
    translatedText = titlesResult.translatedText;
    allTranslations = { ...allTranslations, ...titlesResult.translations };

    // Handle American Time (10:30 -> 10.30)
    const timeRegex = /(\d{1,2}):(\d{2})/g;
     translatedText = translatedText.replace(timeRegex, (match, p1, p2) => {
        const britishTime = `${p1}.${p2}`;
        allTranslations[match] = britishTime;
        return `<span class="highlight">${britishTime}</span>`;
     });

    // Clean up potential extra spaces around highlighted titles
    translatedText = translatedText.replace(/<span class="highlight">(\s*)(.*?)(\s*)<\/span>/g, '$1<span class="highlight">$2</span>$3');


    if (Object.keys(allTranslations).length === 0) {
      return "Everything looks good to me!";
    }

    // Simple highlighting function, assuming replacements have already been highlighted
    return translatedText;
  }

  translateBritishToAmerican(text) {
    let translatedText = text;
    let allTranslations = {};

    // Handle British Only terms
    const britishOnlyResult = this.findAndReplace(translatedText, britishOnly, 'british-to-american');
    translatedText = britishOnlyResult.translatedText;
    allTranslations = { ...allTranslations, ...britishOnlyResult.translations };

    // Handle British to American Spelling (reverse of americanToBritishSpelling)
    const spellingResult = this.findAndReplace(translatedText, americanToBritishSpelling, 'british-to-american');
    translatedText = spellingResult.translatedText;
    allTranslations = { ...allTranslations, ...spellingResult.translations };

    // Handle British Titles (reverse of americanToBritishTitles)
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
         const regex = new RegExp(`(^|\\s)${british}\\b`, 'gi'); // Match at the start of the string or after a space, ensure whole word match, case-insensitive
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, `$1${american}`);
        translations[british] = american;
      }
    } // This section seems redundant now that findAndReplace handles titles. Let's remove it.
    const titlesResult = this.findAndReplace(translatedText, americanToBritishTitles, 'british-to-american');
    translatedText = titlesResult.translatedText;
    allTranslations = { ...allTranslations, ...titlesResult.translations };

    // Handle British Time (10.30 -> 10:30)
    const timeRegex = /(\d{1,2})\.(\d{2})/g;
     translatedText = translatedText.replace(timeRegex, (match, p1, p2) => {
        const americanTime = `${p1}:${p2}`;
        allTranslations[match] = americanTime;
        return `<span class="highlight">${americanTime}</span>`;
     });

    if (Object.keys(allTranslations).length === 0) {
      return "Everything looks good to me!";
    }

    // Simple highlighting function, assuming replacements have already been highlighted
    return translatedText;
  }
}

module.exports = Translator;