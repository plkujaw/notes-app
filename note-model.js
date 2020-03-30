(function(exports) {
  function Note(note_text) {
    this.text = note_text;
  }

  Note.prototype.getText = function() {
    return this.text;
  }

  exports.Note = Note;
})(this)
