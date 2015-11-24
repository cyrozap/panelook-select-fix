// This is the list of attributes the body element uses to block selecting and copying text.
var attributes = ["oncontextmenu", "ondragstart", "onselectstart", "onselect", "oncopy", "onbeforecopy"];

// Select the body element.
var body = document.getElementsByTagName("body")[0];

// Remove each attribute from the body element.
for (i = 0; i < attributes.length; i++) {
    body.removeAttribute(attributes[i]);
}

// Since the body without its attributes still has event listeners, we need to
// clone it. Cloning an element does *not* clone its event listeners.
var new_body = body.cloneNode(true);

// Select the body's parent element (<html>).
var html = body.parentElement;

// Remove the old body with the event listeners.
html.removeChild(body);

// Append the new body, sans event listeners.
html.appendChild(new_body);
