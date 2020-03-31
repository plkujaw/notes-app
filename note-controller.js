(function(exports) {

  class NoteController {
    constructor(noteList) {
      this.noteList = noteList;
      this.noteListView = new ListView(noteList);
    }
    showHtml() {
      let app = document.getElementById("app");
      app.innerHTML = this.noteListView.getHtmlString();
    }
  }

  exports.NoteController = NoteController;
})(this);

let list = new List;
list.addNote("note 1");
list.addNote("note 2");
let controller = new NoteController(list);
controller.showHtml();
