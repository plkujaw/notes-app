(function(exports) {

  class Note {
    constructor(text) {
      this.text = text;
    }

    getText() {
      return this.text;
    }
  }

  exports.Note = Note;
})(this)
