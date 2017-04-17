var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function() {
  $('#word-form').submit(function(event) {
    event.preventDefault();
    var sentence = $('#sentence').val();
    var pleaseWork = new Journal("work please");
    var output = pleaseWork.wordCount(sentence);
      $('#solution').append("<li>" + output + "</li>");
  });
});
