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
