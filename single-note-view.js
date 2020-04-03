(function(exports) {

  SingleNoteView = function(note) {
    this.note = note;
  }

  SingleNoteView.prototype.noteHtml = function() {
    return `<div>${this.note}</div>`
  }

  exports.SingleNoteView = SingleNoteView;
})(this)