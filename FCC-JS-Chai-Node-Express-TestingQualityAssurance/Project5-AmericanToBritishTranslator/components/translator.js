const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
  translateAmericanToBritish(text) {
    let translatedText = text;
    const translations = {};

    // Handle American to British Spelling
    for (const [american, british] of Object.entries(americanToBritishSpelling)) {
      const regex = new RegExp(`\\b${american}\\b`, 'gi');
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, british);
        translations[american] = british;
      }
    }

    // Handle American Only terms
    for (const [american, british] of Object.entries(americanOnly)) {
      const regex = new RegExp(`\\b${american}\\b`, 'gi');
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, british);
        translations[american] = british;
      }
    }

    // Handle American Titles
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
      const regex = new RegExp(`(^|\\s)${american.replace('.', '\\.')}`, 'gi'); // Match at the start of the string or after a space, escape period, case-insensitive
       if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, `$1${british}`);
        translations[american] = british;
      }
    }

    // Handle American Time (10:30 -> 10.30)
    const timeRegex = /(\d{1,2}):(\d{2})/g;
    const originalTimes = text.match(timeRegex);
    if (timeRegex.test(translatedText)) {
      translatedText = translatedText.replace(timeRegex, '$1.$2');
      if (originalTimes) {
      // Store the original time and its British equivalent for highlighting
      originalTimes.forEach(time => {
        translations[time] = time.replace(':', '.');
      });}
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
      const regex = new RegExp(`\\b${british}\\b`, 'gi');
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, american);
        translations[british] = american;
      }
    }

    // Handle British to American Spelling (reverse of americanToBritishSpelling)
    for (const [american, british] of Object.entries(americanToBritishSpelling)) {
        const regex = new RegExp(`\\b${british}\\b`, 'gi'); // Assuming a direct reverse mapping
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, american);
        translations[british] = american;
      }
    }

    // Handle British Titles (reverse of americanToBritishTitles)
    for (const [american, british] of Object.entries(americanToBritishTitles)) {
         const regex = new RegExp(`(^|\\s)${british}\\b`, 'gi'); // Match at the start of the string or after a space, ensure whole word match, case-insensitive
      if (regex.test(translatedText)) {
        translatedText = translatedText.replace(regex, `$1${american}`);
        translations[british] = american;
      }
    }

    // Handle British Time (10.30 -> 10:30)
    const timeRegex = /(\d{1,2})\.(\d{2})/g;
    const originalTimes = text.match(timeRegex);
    if (timeRegex.test(translatedText)) {
      translatedText = translatedText.replace(timeRegex, '$1:$2');
      if (originalTimes) {
        originalTimes.forEach(time => {
          translations[time] = time.replace('.', ':');
        });
      }
    }

    if (Object.keys(translations).length === 0) {
      return "Everything looks good to me!";
    }

    return this.highlightTranslation(text, translatedText, translations);
  }

  highlightTranslation(original, translated, translations) {
    let highlightedText = translated;
    for (const [originalWord, translatedWord] of Object.entries(translations)) {
      const regex = new RegExp(`(?<=\\b|\\s)${translatedWord}(?=\\b|\\s|$)`, 'gi');
      highlightedText = highlightedText.replace(regex, `<span class="highlight">${translatedWord}</span>`);
    }
    return highlightedText;
  }
}

module.exports = Translator;