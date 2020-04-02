(function(exports) {

  ListView = function(list) {
    this.list = list;
  }

  ListView.prototype.getList = function() {
    return this.list;
  }

  ListView.prototype.getHtmlString = function() {
    let html_string = "<ul>";
    for (let i = 0; i < this.list.getNotes().length; i++) {
      html_string = html_string + "<li>" + "<div>" + this.list.notes[i] + "</div>" + "</li>";
    }
    html_string = html_string + "</ul>";
    return html_string;
  }
  exports.ListView = ListView;
})(this)
