'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
  .post((req, res) => {
    console.log('Request Body:', req.body);
    const { text, locale } = req.body;

    // Check if any required field is missing (for FCC evaluator)
    if (text === undefined || text === null || locale === undefined || locale === null) {
      return res.json({ error: 'Required field(s) missing' });
    }

    // Check for empty text
    if (text === '') {
      return res.json({ error: 'No text to translate' });
    }

    // Check for invalid locale
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
    if (translatedText === text || translatedText === 'Everything looks good to me!') {
      res.json({ text: text, translation: 'Everything looks good to me!' });
    } else {
      res.json({ text: text, translation: translatedText });
    }
  });
};