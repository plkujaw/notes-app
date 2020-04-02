(function(exports) {

  ListView = function(list) {
    this.list = list;
  }

  ListView.prototype.getList = function() {
    return this.list;
  }

  ListView.prototype.getHtmlString = function() {
    let list = this.list.getNotes();

    for (var i = 0; i < list.length; i++) {
      list[i] = list[i].getText();
      list[i] = list[i].getText().substring(0, 20);
    }

    return "<ul><li><div>" + list.join("</div></li><li><div>") + "</div></li></ul>";

  }
  exports.ListView = ListView;
})(this)