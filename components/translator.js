const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {

    constructor(){
        this.translationList = [];
        this.buildTranslationList = this.buildTranslationList.bind(this);
        this.translate = this.translate.bind(this);
        this.buildTranslationList();
    }

    buildTranslationList() {
        //Create translation list on class init
        Object.keys(americanOnly).forEach((key) => {
            this.translationList.push([
                key, americanOnly[key]
            ]);
        });

        Object.keys(americanToBritishSpelling).forEach((key) => {
            this.translationList.push([
                key, americanToBritishSpelling[key]
            ]);
        });

        Object.keys(americanToBritishTitles).forEach((key) => {
            this.translationList.push([
                key, americanToBritishTitles[key]
            ]);
        });

        Object.keys(britishOnly).forEach((key) => {
            this.translationList.push([
                britishOnly[key], key 
            ]);
        });

    }

    translate(text, mode) {
        let newString = text;
        let timeRegex = /([01]?[0-9]|2[0-3])(:|\.)([0-5][0-9])/g;

        if(mode === 'american-to-british') {
            this.translationList.forEach((term) => {
                newString = newString.replace(term[0], function(word, pos) {
                    let end = pos + term[0].length;
                    let validWord = false;
                    if(pos === 0 && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                        validWord = true;
                    } else if((pos > 0 && newString[pos - 1] === ' ') && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                        validWord = true;
                    }
                    if (validWord) {
                        return `<span class="highlight">${term[1]}</span>`
                    } else {
                        return term[0]
                    }
                });
                newString = newString.replace(
                    term[0].charAt(0).toUpperCase() + term[0].slice(1), function(word, pos) {
                        let end = pos + term[0].length;
                        let validWord = false;
                        if(pos === 0 && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                            validWord = true;
                        } else if((pos > 0 && newString[pos - 1] === ' ') && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                            validWord = true;
                        }
                        if (validWord) {
                            return `<span class="highlight">${term[1].charAt(0).toUpperCase() + term[1].slice(1)}</span>`
                        } else {
                            return term[0].charAt(0).toUpperCase() + term[0].slice(1)
                        }
                });
            });
        } else if(mode === 'british-to-american') {
            this.translationList.forEach((term) => {
                newString = newString.replace(term[1], function(word, pos) {
                    let end = pos + term[1].length;
                    let validWord = false;
                    if(pos === 0 && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                        validWord = true;
                    } else if((pos > 0 && newString[pos - 1] === ' ') && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                        validWord = true;
                    }
                    if (validWord) {
                        return `<span class="highlight">${term[0]}</span>`
                    } else {
                        return term[1]
                    }
                });
                newString = newString.replace(
                    term[1].charAt(0).toUpperCase() + term[1].slice(1), function(word, pos) {
                        let end = pos + term[1].length;
                        let validWord = false;
                        if(pos === 0 && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                            validWord = true;
                        } else if((pos > 0 && newString[pos - 1] === ' ') && (newString[end] === ' ' || newString[end] === '.' || newString[end] === ',' || end === newString.length)) {
                            validWord = true;
                        }
                        if (validWord) {
                            return `<span class="highlight">${term[0].charAt(0).toUpperCase() + term[0].slice(1)}</span>`
                        } else {
                            return term[1].charAt(0).toUpperCase() + term[1].slice(1)
                        }
                });
            });
        } else {
            return false
        }
        
        let times = newString.match(timeRegex);
        if (times === null) times = [];
        times.forEach((time) => {
            let switchChar = mode === 'american-to-british' ? [":","."] : [".",":"];
            let newTime = time.replace(switchChar[0], switchChar[1]);
            newString = newString.replace(time, `<span class="highlight">${newTime}</span>`);
        })
        return newString
    }

}

module.exports = Translator;