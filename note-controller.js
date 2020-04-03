(function(exports) {

  NoteController = function(note_list = new List) {
    this.note_list = note_list;
    this.note_list_view = new ListView(this.note_list);
  }

  // NoteController.prototype.showHtml = function() {
  //   let app = document.getElementById("app");
  //   app.innerHTML = this.note_list_view.getHtmlString();
  // }

  NoteController.prototype.displayNote = function() {
    let self = this;

    window.addEventListener("hashchange", function() {
      let note_id = window.location.hash.split("#notes/")[1];

      let notes = document.getElementById("notes");

      notes.innerHTML = self.note_list.notes[note_id].text;
    })
  }


  NoteController.prototype.submitForm = function() {
    let self = this;

    text.addEventListener("submit", function() {
      event.preventDefault();

      let text = document.getElementById("textarea").value;
      if (text.length != 0) {
        self.note_list.addNote(text);;
        let app = document.getElementById("app");
        app.innerHTML = self.note_list_view.getHtmlString();
        console.log(`Note ${text} added`);
      } else
        window.alert("Cannot add an empty note.");
    })
  }

  exports.NoteController = NoteController;
})(this)

let controller = new NoteController();
// controller.showHtml();
controller.displayNote();
controller.submitForm();