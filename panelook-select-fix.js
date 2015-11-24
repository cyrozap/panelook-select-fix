var attributes = ["oncontextmenu", "ondragstart", "onselectstart", "onselect", "oncopy", "onbeforecopy"];
var body = document.getElementsByTagName("body")[0];
for (i = 0; i < attributes.length; i++) {
    body.removeAttribute(attributes[i]);
}

var new_body = body.cloneNode(true);

var html = body.parentElement;
html.removeChild(body);
html.appendChild(new_body);
