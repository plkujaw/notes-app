(function(exports) {

  Note = function(text) {
    this.id = 0;
    this.text = text;
  }

  Note.prototype.getText = function() {
    return this.text;
  }

  exports.Note = Note;
})(this)