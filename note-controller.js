window.onload = function() {
  // let greeting = document.getElementById('app');
  // greeting.innerHTML = 'howdy!';


  class NoteController {
    constructor(note_list) {
      this.note_list = new List();
      this.note = new Note("favorite drink: alcazeltzer");
      this.note_list.addNote(this.note);
      this.list_view = new ListView(this.note_list);
    }


    getHtmlString() {

  }
}
