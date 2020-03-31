(function(exports) {

  class List {
    constructor() {
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
