(function(exports) {
  function List() {
    this.notes = [];
  };

  List.prototype.addNote = function(note) {
    this.notes.push(note);
  };

  List.prototype.getNotes = function() {
    return this.notes;
  };

  exports.List = List;
})(this);