(function(exports) {

  class List {
    constructor(note) {
      this.notes = [];
    }

    addNote(note) {
      this.notes.push(note);
    }

    getNotes() {
      return this.notes;
    }
  }

  exports.List = List;
})(this)
