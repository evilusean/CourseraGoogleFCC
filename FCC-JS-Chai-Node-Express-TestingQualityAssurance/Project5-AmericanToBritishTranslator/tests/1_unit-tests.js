const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');

suite('Unit Tests', () => {

  const translator = new Translator();
  
  // Translate Mangoes are my favorite fruit. to British English
  test('Translate Mangoes are my favorite fruit. to British English', function(done) {
    const text = "Mangoes are my favorite fruit.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'Mangoes are my <span class="highlight">favourite</span> fruit.');
    done();
  });

  // Translate I ate yogurt for breakfast. to British English
  test('Translate I ate yogurt for breakfast. to British English', function(done) {
    const text = "I ate yogurt for breakfast.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'I ate <span class="highlight">yoghurt</span> for breakfast.');
    done();
  });

  // Translate We had a party at my friend's condo. to British English
  test('Translate We had a party at my friend\'s condo. to British English', function(done) {
    const text = "We had a party at my friend's condo.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'We had a party at my friend\'s <span class="highlight">flat</span>.');
    done();
  });

  // Translate Can you toss this in the trashcan for me? to British English
  test('Translate Can you toss this in the trashcan for me? to British English', function(done) {
    const text = "Can you toss this in the trashcan for me?";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'Can you toss this in the <span class="highlight">bin</span> for me?');
    done();
  });

  // Translate The parking lot was full. to British English
  test('Translate The parking lot was full. to British English', function(done) {
    const text = "The parking lot was full.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'The <span class="highlight">car park</span> was full.');
    done();
  });

  // Translate Like a high tech Rube Goldberg machine. to British English
  test('Translate Like a high tech Rube Goldberg machine. to British English', function(done) {
    const text = "Like a high tech Rube Goldberg machine.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'Like a high tech <span class="highlight">Heath Robinson</span> machine.');
    done();
  });

  // Translate To play hooky means to skip class or work. to British English
  test('Translate To play hooky means to skip class or work. to British English', function(done) {
    const text = "To play hooky means to skip class or work.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'To <span class="highlight">bunk off</span> means to skip class or work.');
    done();
  });

  // Translate No Mr. Bond, I expect you to die. to British English
  test('Translate No Mr. Bond, I expect you to die. to British English', function(done) {
    const text = "No Mr. Bond, I expect you to die.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'No <span class="highlight">Mr</span> Bond, I expect you to die.');
    done();
  });

  // Translate Dr. Grosh will see you now. to British English
  test('Translate Dr. Grosh will see you now. to British English', function(done) {
    const text = "Dr. Grosh will see you now.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, '<span class="highlight">Dr</span> Grosh will see you now.');
    done();
  });

  // Translate Lunch is at 12:15 today. to British English
  test('Translate Lunch is at 12:15 today. to British English', function(done) {
    const text = "Lunch is at 12:15 today.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.equal(translatedText, 'Lunch is at <span class="highlight">12.15</span> today.');
    done();
  });

  // Translate We watched the footie match for a while. to American English
  test('Translate We watched the footie match for a while. to American English', function(done) {
    const text = "We watched the footie match for a while.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'We watched the <span class="highlight">soccer</span> match for a while.');
    done();
  });

  // Translate Paracetamol takes up to an hour to work. to American English
  test('Translate Paracetamol takes up to an hour to work. to American English', function(done) {
    const text = "Paracetamol takes up to an hour to work.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, '<span class="highlight">Tylenol</span> takes up to an hour to work.');
    done();
  });

  // Translate First, caramelise the onions. to American English
  test('Translate First, caramelise the onions. to American English', function(done) {
    const text = "First, caramelise the onions.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'First, <span class="highlight">caramelize</span> the onions.');
    done();
  });

  // Translate I spent the bank holiday at the funfair. to American English
  test('Translate I spent the bank holiday at the funfair. to American English', function(done) {
    const text = "I spent the bank holiday at the funfair.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.');
    done();
  });

  // Translate I had a bicky then went to the chippy. to American English
  test('Translate I had a bicky then went to the chippy. to American English', function(done) {
    const text = "I had a bicky then went to the chippy.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.');
    done();
  });

  // Translate I've just got bits and bobs in my bum bag. to American English
  test('Translate I\'ve just got bits and bobs in my bum bag. to American English', function(done) {
    const text = "I've just got bits and bobs in my bum bag.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.');
    done();
  });

  // Translate The car boot sale at Boxted Airfield was called off. to American English
  test('Translate The car boot sale at Boxted Airfield was called off. to American English', function(done) {
    const text = "The car boot sale at Boxted Airfield was called off.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'The <span class="highlight">swap meet</span> at Boxted Airfield was called off.');
    done();
  });

  // Translate Have you met Mrs Kalyani? to American English
  test('Translate Have you met Mrs Kalyani? to American English', function(done) {
    const text = "Have you met Mrs Kalyani?";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'Have you met <span class="highlight">Mrs.</span> Kalyani?');
    done();
  });

  // Translate Prof Joyner of King's College, London. to American English
  test('Translate Prof Joyner of King\'s College, London. to American English', function(done) {
    const text = "Prof Joyner of King's College, London.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, '<span class="highlight">Prof.</span> Joyner of King\'s College, London.');
    done();
  });

  // Translate Tea time is usually around 4 or 4.30. to American English
  test('Translate Tea time is usually around 4 or 4.30. to American English', function(done) {
    const text = "Tea time is usually around 4 or 4.30.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.equal(translatedText, 'Tea time is usually around 4 or <span class="highlight">4:30</span>.');
    done();
  });

  // Highlight translation in Mangoes are my favorite fruit.
  test('Highlight translation in Mangoes are my favorite fruit.', function(done) {
    const text = "Mangoes are my favorite fruit.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.include(translatedText, '<span class="highlight">favourite</span>');
    done();
  });

  // Highlight translation in I ate yogurt for breakfast.
  test('Highlight translation in I ate yogurt for breakfast.', function(done) {
    const text = "I ate yogurt for breakfast.";
    const locale = "american-to-british";
    const translatedText = translator.translateAmericanToBritish(text);
    assert.include(translatedText, '<span class="highlight">yoghurt</span>');
    done();
  });

  // Highlight translation in We watched the footie match for a while.
  test('Highlight translation in We watched the footie match for a while.', function(done) {
    const text = "We watched the footie match for a while.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.include(translatedText, '<span class="highlight">soccer</span>');
    done();
  });

  // Highlight translation in Paracetamol takes up to an hour to work.
  test('Highlight translation in Paracetamol takes up to an hour to work.', function(done) {
    const text = "Paracetamol takes up to an hour to work.";
    const locale = "british-to-american";
    const translatedText = translator.translateBritishToAmerican(text);
    assert.include(translatedText, '<span class="highlight">Tylenol</span>');
    done();
  });

});
