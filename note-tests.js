function testCreateNote() {
  let note = new Note("test note");
  let note_text = note.text;

  assert.isTrue(note.text === note_text, "testCreateNote");
}

testCreateNote();

function testAddToList() {
  let list = new List();
  list.addNote("test note 1");
  list.addNote("test note 2");
  assert.isTrue(list.notes[0].text === "test note 1", "testAddToList");
  assert.isTrue(list.notes[0].id === 0, "testGetId0");
  assert.isTrue(list.notes[1].id === 1, "testGetId1");
}

testAddToList();

function testListView() {
  let list = new List();
  list.addNote("test note");
  list.addNote("test note 2");
  let list_view = new ListView(list);
  let html_string = `<ul><li><div><a href='#notes/${list.notes[0].id}'>${list.notes[0].text}</a></div></li><li><div><a href='#notes/${list.notes[1].id}'>${list.notes[1].text}</a></div></li></ul>`;

  assert.isTrue(list_view.getHtmlString() === html_string, "testListView");
}

testListView();

function testSingleNoteView() {
  let list = new List();
  let note = list.addNote("test note");
  let note_text = list.notes[0].text;
  let view_note = new SingleNoteView(note_text);
  view_note.noteHtml();
  note_html = `<div>${note_text}</div>`;

  assert.isTrue(view_note.noteHtml() === note_html, "testSingleNoteView");
}

testSingleNoteView();

function testShortListView() {
  let list = new List();
  list.addNote("very long test note to testShortListView");
  let list_view = new ListView(list);
  let short_note = "very long test note ";

  assert.isTrue(list_view.getHtmlString() === `<ul><li><div><a href='#notes/${list.notes[0].id}'>${short_note}</a></div></li></ul>`, "testShortListView")
}

testShortListView();
