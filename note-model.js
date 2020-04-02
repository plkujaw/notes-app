(function(exports) {

  Note = function(text) {
    this.text = text;
  }

  Note.prototype.getText = function() {
    return this.text;
  }

  exports.Note = Note;
})(this)
