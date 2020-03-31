(function(exports) {

  class ListView {
    constructor(list) {
      this.list = list;
    }

    getList() {
      return this.list;
    }

    getHtmlString() {
      let html_string = "<ul>";
      for (let i = 0; i < this.list.getNotes().length; i++) {
        html_string = html_string + "<li>" + "<div>" + this.getList().notes[i] + "</div>" + "</li>";
      }
      html_string = html_string + "</ul>";
      return html_string;
    }
  }

  exports.ListView = ListView;
})(this)
