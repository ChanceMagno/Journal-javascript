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
