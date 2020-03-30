let assert = {
  isTrue: (test, message) => {
    if (!test) {
      throw new Error(`${message} is red!`);
    } else {
      console.log(`${message} is green!`);
    }
  }
}
