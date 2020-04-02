function testCreateNote() {
  let note = new Note("test note");
  let text = note.text;

  assert.isTrue(note.text === text, "testCreateNote");
}

testCreateNote();

function testAddToList() {
  let note = new Note("test note 2");
  let list = new List();
  list.addNote(note);

  assert.isTrue(list.notes[0] === note, "testAddToList");
}

testAddToList();

function testListView() {
  let note = new Note("test note 3");
  let list = new List();
  let list_view = new ListView(list);
  let html_string = "<ul><li><div>" + note.getText() + "</div></li></ul>";
  list.addNote(note);

  assert.isTrue(list_view.getHtmlString() === html_string, "testListView");
}

testListView();

function testSingleNoteView() {
  let note = new Note("test note 4");
  let view_note = new SingleNoteView(note);
  view_note.noteHtml();
  note_html = "<div>" + note.getText() + "</div>";

  assert.isTrue(view_note.noteHtml() === note_html, "testSingleNoteView");
}

testSingleNoteView();

function testShortListView() {
  let note = new Note("very long test note to testShortListView");
  let list = new List();
  let list_view = new ListView(list);
  let short_note = "very long test note "
  list.addNote(note);

  assert.isTrue(list_view.getHtmlString() === "<ul><li><div>" + short_note + "</div></li></ul>", "testShortListView")
}

testShortListView();