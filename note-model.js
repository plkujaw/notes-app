(function(exports) {
  class Note {
    constructor(note_text) {
      this.text = note_text;
    }
    getText() {
      return this.text;
    }
  }
  exports.Note = Note;
})(this)
