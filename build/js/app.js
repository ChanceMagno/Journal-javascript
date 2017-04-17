(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#word-form').submit(function(event) {
    event.preventDefault();
    var sentence = $('#sentence').val();
    var pleaseWork = new Journal("work please");
    var wordCount = pleaseWork.wordCount(sentence);
    var vowelCount = pleaseWork.getVowels(sentence);
    var consonantsCount = pleaseWork.getConsonants(sentence);
      $('#solution').append("<li> you have " + wordCount + " words in your sentence. Your sentence has " + vowelCount + " vowels and " + consonantsCount + " consonants.</li>");
  });
});

},{"./../js/journal.js":2}],2:[function(require,module,exports){
function Journal(sentence) {
  this.sentence = sentence;
}

Journal.prototype.wordCount = function(sentence) {
  var wordCount = 0;
  for (i = 0; i < sentence.split(' ').length; i++) {
    wordCount += 1;
  }
  return wordCount;
}

Journal.prototype.getVowels = function(sentence) {
    return sentence.match(/[aeiou]/gi).length;
}

Journal.prototype.getConsonants = function(sentence) {
  return sentence.match(/[^aeiou]/gi).length;
}

exports.journalModule = Journal;

},{}]},{},[1]);
