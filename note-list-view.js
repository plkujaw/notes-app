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

    // for (let i = 0; i < list.length; i++) {
    //   list[i] = list[i].text.substring(0, 20);
    // }
    //
    // let html_string = `<ul><li><div><a href='#'>${list.join("</a></div></li><li><div><a href='#'>")}</a></div></li></ul>`;
    // // console.log('html_string', html_string);

    return html;

  }
  exports.ListView = ListView;
})(this)