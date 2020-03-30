testCreateNote = () => {
  let note = new Note("test note");
  let text = note.text;

  assert.isTrue(note.text === text, "testCreateNote");
}

testCreateNote();


testAddToList = () => {
  let note1 = new Note("test note 1");
  let note2 = new Note("test note 2");
  let list = new List();
  list.addNote(note1);
  list.addNote(note2);

  assert.isTrue(list.notes[0] === note1, "testAddToList");
  assert.isTrue(list.notes[1] === note2, "testAddToList");
}

testAddToList();


testListView = () => {

}

testListView();
