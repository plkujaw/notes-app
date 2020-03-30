(function(exports) {
  function testNoteTextToEqualtestNote() {
    var note = new Note(text);
    var text = note.text;

    if (note.text !== text) {
      throw new Error("not a test note");
    }
    else {
      console.log("whatever we are testing, this test is green!");
    }
  };

  testNoteTextToEqualtestNote();
})(this);
