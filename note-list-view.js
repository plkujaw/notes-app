(function(exports) {

  ListView = function(list) {
    this.list = list;
  }

  ListView.prototype.getList = function() {
    return this.list;
  }

  ListView.prototype.getHtmlString = function() {
    let list = this.list.notes;

    for (var i = 0; i < list.length; i++) {
      list[i] = list[i].text.substring(0, 20);
    }

    let html_string = `<ul><li><div>${list.join("</div></li><li><div>")}</div></li></ul>`;

    return html_string;

  }
  exports.ListView = ListView;
})(this)