const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');

suite('Functional Tests', () => {

  suite('POST to /api/translate', () => {

    test('Translation with text and locale fields', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          text: "Mangoes are my favorite fruit.",
          locale: "american-to-british"
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation');
          assert.equal(res.body.text, "Mangoes are my favorite fruit.");
          // You will need to update this assertion once the translation logic is implemented
          assert.isNotNull(res.body.translation);
          done();
        });
    });

    test('Translation with text and invalid locale field', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          text: "Mangoes are my favorite fruit.",
          locale: "invalid-locale"
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'error');
          assert.equal(res.body.error, 'Invalid value for locale field');
          done();
        });
    });

    test('Translation with missing text field', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          locale: "american-to-british"
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'error');
          assert.equal(res.body.error, 'No text to translate');
          done();
        });
    });

    test('Translation with missing locale field', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          text: "Mangoes are my favorite fruit."
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'error');
          assert.equal(res.body.error, 'Invalid value for locale field');
          done();
        });
    });

    test('Translation with empty text', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          text: "",
          locale: "american-to-british"
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'error');
          assert.equal(res.body.error, 'No text to translate');
          done();
        });
    });

    test('Translation with text that needs no translation', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          text: "This is a sentence that needs no translation.",
          locale: "american-to-british"
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation');
          assert.equal(res.body.text, "This is a sentence that needs no translation.");
 assert.equal(res.body.translation, "Everything looks good to me!");
          done();
        });
    });

    test('Translation of titles in American to British English', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          text: "Dr. Grosh is here.",
          locale: "american-to-british"
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation');
          assert.equal(res.body.text, "Dr. Grosh is here.");
          assert.equal(res.body.translation, "<span class=\"highlight\">Dr</span> Grosh is here.");
          done();
        });
    });

    test('Translation of titles in British to American English', (done) => {
      chai.request(server)
        .post('/api/translate')
        .send({
          text: "Mr Smith is here.",
          locale: "british-to-american"
        })
        .end((err, res) => {
          console.log(res.body);
          assert.equal(res.status, 200);
          assert.property(res.body, 'text');
          assert.property(res.body, 'translation');
          assert.equal(res.body.text, "Mr Smith is here.");
          assert.equal(res.body.translation, "<span class=\"highlight\">Mr.</span> Smith is here.");
          done();
        });
    });
  });

});
