function Journal(skinName) {
  this.skin = skinName;
}

Journal.prototype.wordCount = function(sentence) {
  var wordCount = 0;
  for (i = 0; i < sentence.split(' ').length; i++) {
    wordCount += 1;
  }
  return wordCount;
}

exports.journalModule = Journal;
