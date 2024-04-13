const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
let translator = new Translator();

suite('Unit Tests', () => {

    suite('American to British', function() {
        //Translate Mangoes are my favorite fruit. to British English
        test('Translate Mangoes are my favorite fruit. to British English', function(done) {
            let text='Mangoes are my favorite fruit.';
            let expected='Mangoes are my <span class="highlight">favourite</span> fruit.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate I ate yogurt for breakfast. to British English
        test('Translate I ate yogurt for breakfast. to British English', function(done) {
            let text='I ate yogurt for breakfast.';
            let expected='I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate We had a party at my friend's condo. to British English
        test('Translate We had a party at my friend\'s condo. to British English', function(done) {
            let text='We had a party at my friend\'s condo.';
            let expected='We had a party at my friend\'s <span class="highlight">flat</span>.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Can you toss this in the trashcan for me? to British English
        test('Translate Can you toss this in the trashcan for me? to British English', function(done) {
            let text='Can you toss this in the trashcan for me?';
            let expected='Can you toss this in the <span class="highlight">bin</span> for me?';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate The parking lot was full. to British English
        test('Translate The parking lot was full. to British English', function(done) {
            let text='The parking lot was full.';
            let expected='The <span class="highlight">car park</span> was full.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Like a high tech Rube Goldberg machine. to British English
        test('Translate Like a high tech Rube Goldberg machine. to British English', function(done) {
            let text='Like a high tech Rube Goldberg machine.';
            let expected='Like a high tech Rube Goldberg machine.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate To play hooky means to skip class or work. to British English
        test('Translate To play hooky means to skip class or work. to British English', function(done) {
            let text='To play hooky means to skip class or work.';
            let expected='To <span class="highlight">bunk off</span> means to skip class or work.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate No Mr. Bond, I expect you to die. to British English
        test('Translate No Mr. Bond, I expect you to die. to British English', function(done) {
            let text='No Mr. Bond, I expect you to die.';
            let expected='No <span class="highlight">Mr</span> Bond, I expect you to die.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Dr. Grosh will see you now. to British English
        test('Translate Dr. Grosh will see you now. to British English', function(done) {
            let text='Dr. Grosh will see you now.';
            let expected='<span class="highlight">Dr</span> Grosh will see you now.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Lunch is at 12:15 today. to British English
        test('Translate Lunch is at 12:15 today. to British English', function(done) {
            let text='Lunch is at 12:15 today.';
            let expected='Lunch is at <span class="highlight">12.15</span> today.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
    });

    suite('British to American', function() {
        //Translate We watched the footie match for a while. to American English
        test('Translate We watched the footie match for a while. to American English', function(done) {
            let text='We watched the footie match for a while.';
            let expected='We watched the <span class="highlight">soccer</span> match for a while.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Paracetamol takes up to an hour to work. to American English
        test('Translate Paracetamol takes up to an hour to work. to American English', function(done) {
            let text='Paracetamol takes up to an hour to work.';
            let expected='<span class="highlight">Acetaminophen</span> takes up to an hour to work.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate First, caramelise the onions. to American English
        test('Translate First, caramelise the onions. to American English', function(done) {
            let text='First, caramelise the onions.';
            let expected='First, <span class="highlight">caramelize</span> the onions.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate I spent the bank holiday at the funfair. to American English
        test('Translate I spent the bank holiday at the funfair. to American English', function(done) {
            let text='I spent the bank holiday at the funfair.';
            let expected='I spent the <span class="highlight">public holiday</span> at the <span class="highlight">carnival</span>.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate I had a bicky then went to the chippy. to American English
        test('Translate I had a bicky then went to the chippy. to American English', function(done) {
            let text='I had a bicky then went to the chippy.';
            let expected='I had a <span class="highlight">cookie</span> then went to the <span class="highlight">fish-and-chip shop</span>.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate I've just got bits and bobs in my bum bag. to American English
        test('Translate I\'ve just got bits and bobs in my bum bag. to American English', function(done) {
            let text='I\'ve just got bits and bobs in my bum bag.';
            let expected='I\'ve just got <span class="highlight">odds and ends</span> in my <span class="highlight">fanny pack</span>.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate The car boot sale at Boxted Airfield was called off. to American English
        test('Translate The car boot sale at Boxted Airfield was called off. to American English', function(done) {
            let text='The car boot sale at Boxted Airfield was called off.';
            let expected='The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Have you met Mrs Kalyani? to American English
        test('Translate The car boot sale at Boxted Airfield was called off. to American English', function(done) {
            let text='The car boot sale at Boxted Airfield was called off.';
            let expected='The <span class="highlight">swap meet</span> at Boxted Airfield was called off.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Prof Joyner of King's College, London. to American English
        test('Translate Prof Joyner of King\'s College, London. to American English', function(done) {
            let text='Prof Joyner of King\'s College, London.';
            let expected='<span class="highlight">Prof.</span> Joyner of King\'s College, London.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Translate Tea time is usually around 4 or 4.30. to American English
        test('Translate Tea time is usually around 4 or 4.30. to American English', function(done) {
            let text='Tea time is usually around 4 or 4.30.';
            let expected='Tea time is usually around 4 or <span class="highlight">4:30</span>.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
    });

    suite('Highlights', function() {
        //Highlight translation in Mangoes are my favorite fruit.
        test('Highlight translation in Mangoes are my favorite fruit.', function(done) {
            let text='Mangoes are my favorite fruit.';
            let expected='Mangoes are my <span class="highlight">favourite</span> fruit.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Highlight translation in I ate yogurt for breakfast.
        test('Highlight translation in I ate yogurt for breakfast.', function(done) {
            let text='I ate yogurt for breakfast.';
            let expected='I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.';
            let mode='american-to-british';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Highlight translation in We watched the footie match for a while.
        test('Highlight translation in We watched the footie match for a while.', function(done) {
            let text='We watched the footie match for a while.';
            let expected='We watched the <span class="highlight">soccer</span> match for a while.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
        //Highlight translation in Paracetamol takes up to an hour to work.
        test('Highlight translation in Paracetamol takes up to an hour to work.', function(done) {
            let text='Paracetamol takes up to an hour to work.';
            let expected='<span class="highlight">Acetaminophen</span> takes up to an hour to work.';
            let mode='british-to-american';
            assert.equal(translator.translate(text, mode), expected);
            done()
        });
    })

});
