(function(exports) {
  List = function() {
    this.notes = [];
  }

  List.prototype.addNote = function(text) {
    let note = new Note(text);
    note.id = this.notes.length;
    this.notes.push(note);
  }

  List.prototype.getNotes = function() {
    return this.notes;
  }

  exports.List = List;
})(this)