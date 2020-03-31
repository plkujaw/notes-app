(function(exports) {

  class ListView {
    constructor(list) {
      this.list = list;
    }

    getList() {
      return this.list;
    }

    getHtmlString() {
      let htmlString = "<ul>";
      for (let i = 0; i < this.list.notes.length; i++) {
        htmlString = htmlString + "<li>" + "<div>" + this.list.notes[i].getText() + "</div>" + "</li>";

      }
      htmlString = htmlString + "</ul>";
      return htmlString;
    }
  }

  exports.ListView = ListView;
})(this)
