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

function testListView() {
  let note = new Note("test note");
  let list = new List();
  let listview = new ListView(list);
  let htmlString = "<ul>" + "<li>" + "<div>" + note.getText() + "</div>" + "</li>" + "</ul>"

  list.addNote(note);

  assert.isTrue(listview.getHtmlString() === htmlString, "testListView");

};

testListView();
