(function(exports) {
  SingleNoteView = function(note) {
    this.note = note;
  }

  SingleNoteView.prototype.noteHtml = function() {
    return "<div>" + this.note.getText() + "</div>";
  }

  exports.SingleNoteView = SingleNoteView;
})(this)