var md = markdownit({
  html: true,
  highlight: function (code, lang) {
    return '';
  }
});

var editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  lineNumbers: true,
  viewportMargin: Infinity
});

function render() {
  document.getElementById("document").innerHTML = md.render(editor.getValue());
}

render();

editor.on("changes", render);

$(document).foundation();
