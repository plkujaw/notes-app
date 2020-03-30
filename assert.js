let assert = {

  isTrue: function(testNote) {
    if (!testNote) {
      throw new Error("testCreateNote test is red!");
    } else {
      console.log("testCreateNote test is green!");
    }
  },

  isTrue: function(testAddToList) {
    if (!testAddToList) {
      throw new Error("testAddToList test is red!");
    } else {
      console.log("testAddToList test is green!");
    }
  }

}
