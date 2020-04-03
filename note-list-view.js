(function(exports) {

  ListView = function(list) {
    this.list = list;
  }

  ListView.prototype.getList = function() {
    return this.list;
  }

  ListView.prototype.getHtmlString = function() {
    let list = this.list.notes;
    let html = "<ul>";

    list.forEach(note => {
      html += `<li><div><a href='#notes/${note.id}'>${note.text.substring(0, 20)}</a></div></li>`;
    });

    html += "</ul>";
    return html;

  }
  exports.ListView = ListView;
})(this)