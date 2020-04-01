function testCreateNote() {
  let note = new Note("test note");
  let text = note.text;

  assert.isTrue(note.text === text, "testCreateNote");
};

testCreateNote();


function testAddToList() {
  let note = new Note("test note 1");
  let list = new List();
  list.addNote(note);

  assert.isTrue(list.notes[0] === note, "testAddToList");
};

testAddToList();

// function testListView() {
//   let note = new Note("test note");
//   let list = new List();
//   let list_view = new ListView(list);
//   let html_string = "<ul>" + "<li>" + "<div>" + note.getText() + "</div>" + "</li>" + "</ul>"
//
//   list.addNote(note);
//   // console.log(html_string);
//   // console.log(list_view.getHtmlString());
//
//   assert.isTrue(list_view.getHtmlString() === html_string, "testListView");
//
// };
//
// testListView();
