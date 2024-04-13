'use strict';

const Translator = require('../components/translator.js');

module.exports = function (app) {
  
  const translator = new Translator();

  app.route('/api/translate')
    .post((req, res) => {
      let {text, locale} = req.body;
      const isWhitespaceString = str => !str.replace(/\s/g, '').length
      let whiteSpaceResult = false;
      if(req.body.hasOwnProperty('text')) {
        whiteSpaceResult = isWhitespaceString(text);
        if (text.length === 0) {
          whiteSpaceResult = true;
        }
      }

      if(!req.body.hasOwnProperty('text') || !req.body.hasOwnProperty('locale')) {
        return res.json({ error: 'Required field(s) missing' });
      } else if(whiteSpaceResult) {
        return res.json({ error: 'No text to translate' });
      } else if(locale != 'american-to-british' && locale != 'british-to-american'){
        return res.json({ error: 'Invalid value for locale field' });
      } else {
        let translated = translator.translate(text, locale);
        if (text === translated) {
          return res.json({
            text: text,
            translation: 'Everything looks good to me!'
          })
        } else {
          return res.json({
            text: text,
            translation: translated
          })
        }
      }
    });
};
