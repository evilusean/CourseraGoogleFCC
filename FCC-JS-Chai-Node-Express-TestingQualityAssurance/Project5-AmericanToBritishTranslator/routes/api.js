'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
  .post((req, res) => {
    console.log('Request Body:', req.body);
    const { text, locale } = req.body;

    // Add these corrected validation checks
    if (text === undefined || text === null) { // Check for undefined or null
      return res.json({ error: 'Required field(s) missing' });
    }

    if (locale === undefined || locale === null) { // Check for undefined or null
      return res.json({ error: 'Required field(s) missing' });
    }

    if (text === '') {
      return res.json({ error: 'No text to translate' });
    }

    if (locale !== 'american-to-british' && locale !== 'british-to-american') {
      return res.json({ error: 'Invalid value for locale field' });
    }
    // End of added validation checks

    let translatedText;
    if (locale === 'american-to-british') {
      translatedText = translator.translateAmericanToBritish(text);
    } else if (locale === 'british-to-american') {
      translatedText = translator.translateBritishToAmerican(text);
    }

    console.log('Translated Text:', translatedText);
    if (translatedText === text || translatedText === 'Everything looks good to me!') { // Also check for the "no translation" message
      res.json({ text: text, translation: 'Everything looks good to me!' });
    } else {
      res.json({ text: text, translation: translatedText });
    }
  });
};