function testCreateNote() {
  var note = new Note(text);
  var text = note.text;

  assert.isTrue(note.text === text);
};

testCreateNote();


function testAddToList() {
  var note = new Note("test note 1");
  var list = new List();
  addNote(note);

  assert.isTrue(list.notes[0] === note);
};

testAddToList();



// function testCircleRadiusDefaultsTo10() {
//   var circle = new Circle();
//   assert.isTrue(circle.radius === 10);
// };
//
// testCircleRadiusDefaultsTo10();
