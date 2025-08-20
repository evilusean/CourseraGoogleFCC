'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      console.log('Request Body:', req.body);
      const { text, locale } = req.body;

      if (text === undefined || locale === undefined) { // This check should remain as a generic missing field check.
        console.log('Missing field(s)');
        return res.json({ error: 'Required field(s) missing' });
      }
      // Specific checks for empty or invalid fields after the general missing check
      // are now redundant for the functional tests that check for missing fields,
      // but are needed for tests that specifically check for empty text or invalid locale values.

      if (text === '') {
        return res.json({ error: 'No text to translate' });
      }

      if (locale !== 'american-to-british' && locale !== 'british-to-american') {
        return res.json({ error: 'Invalid value for locale field' });
      }

      let translatedText;
      if (locale === 'american-to-british') {
        translatedText = translator.translateAmericanToBritish(text);
      } else if (locale === 'british-to-american') {
        translatedText = translator.translateBritishToAmerican(text);
      }

      console.log('Translated Text:', translatedText);
      if (translatedText === text) {
        res.json({ text: text, translation: 'Everything looks good to me!' }); // This is correct according to requirement 9.
      } else {
        res.json({ text: text, translation: translatedText });
      }
    });
};