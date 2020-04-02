(function(exports) {

  NoteController = function(note_list) {
    this.note_list = note_list;
    this.note_list_view = new ListView(note_list);
  }

  NoteController.prototype.showHtml = function() {
    let app = document.getElementById("app");
    app.innerHTML = this.note_list_view.getHtmlString();
  }

  exports.NoteController = NoteController;
})(this)

let list = new List;
let note1 = new Note("note 1");
let note2 = new Note("very long test note to testShortListView");
list.addNote(note1);
list.addNote(note2);
let controller = new NoteController(list);
controller.showHtml();