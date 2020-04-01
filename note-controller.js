(function(exports) {

  class NoteController {
    constructor(note_list) {
      this.note_list = note_list;
      this.note_list_view = new ListView(note_list);
    }
    showHtml() {
      let app = document.getElementById("app");
      app.innerHTML = this.note_list_view.getHtmlString();
    }
  }

  exports.NoteController = NoteController;
})(this);

let list = new List;
list.addNote("note 1");
list.addNote("note 2");
let controller = new NoteController(list);
controller.showHtml();
