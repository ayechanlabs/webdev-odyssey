let val;

val = document; // whole document
val = document.all; // all element in document
val = document.doctype; // document type
val = document.head; // head element
val = document.body; // body element

val = document.URL; // URL of document
val = document.links; // all links in document
val = document.links[0]; // first link
val = document.links[0].id; // id of first link

val = document.links[3].className; // class name of 4th link
val = document.links[3].classList; // class list of 4th link
val = document.links[3].classList[0]; // first class of 4th link
val = document.links[3].classList[1]; // second class of 4th link

val = document.forms; // all forms in document
val = document.forms[0]; // first form
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList;
val = document.forms[0].classList[0];
val = document.forms[0].action; // action of first form
val = document.forms[0].method; // method of first form

val = document.images; // all images in document
val = document.images[0]; // first image
val = document.images[0].id; // id of first image
val = document.images[0].className; // class name of first image
val = document.images[0].classList; // class list of first image
val = document.images[0].classList[0]; // first class of first image
val = document.images[0].src; // source of first image
val = document.images[0].alt; // alt text of first image

val = document.scripts; // all scripts in document
val = document.scripts[0]; // first script
val = document.scripts[0].id; // id of first script
val = document.scripts[0].src; // source of first script
val = document.scripts[0].type; // type of first script

console.log(val);

// Change Styling
document.getElementById("tasktitle").style.backgroundColor = "green";
document.getElementById("tasktitle").style.color = "white";
document.getElementById("tasktitle").style.padding = "5px";

// Change Content
// document.getElementById("tasktitle").textContent = "Task List";
// document.getElementById("tasktitle").innerText = "My Tasks";
document.getElementById("tasktitle").innerHTML = "<span style='color: white;'>My To Do</span>" // html tag တွေကို innerHTML နဲ့ သုံးလို့ ရတယ်။ ဒါပေမဲ့ အဲဒီ html tag တွေကို textContent နဲ့ innerText နဲ့ သုံးလို့ မရဘူး။

// DOM (Document Object Model), programming interface 
// for HTML and XML documents. It represents the page so that 
// programs can change the document structure, style, and content. 
// The DOM represents the document as nodes and objects; that way, 
// programming languages can interact with the page.

// to access Web Page (HTML Document)
// i. search
// ii. create new element
// iii. edit
// iv. remove
// v. action to Events

// getElementById() => ID => #
// getElementsByClassName() => Class => .
// getElementsByTagName() => Tag => tag name
// querySelector() => ID, Class, Tag အားလုံးကို ခေါ် လို့ ရနေပြီ။ သူမှာ class, id, tag စသဖြင့် ကို CSS Selector လိုမျိုး ခေါ် ဖို့ လိုတယ်။
// querySelectorAll() => သူက တော့ querySelector ကို အားလုံးကို ခေါ် လို့ ရနေပြီ။ သူမှာ class, id, tag စသဖြင့် ကို CSS Selector လိုမျိုး ခေါ် လို့ ရတယ် ဒါမဲ့ သူက array နဲ့ လာမှာ။
