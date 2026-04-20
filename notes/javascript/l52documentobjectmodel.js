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

// Call by Class Name (Class)
// const lis = document.getElementsByClassName("list-group-item");
// console.log(lis); // getElementsByClassName က array နဲ့ မလာဘူး။ HTML Collection နဲ့ လာတယ်။ ဒါပေမဲ့ array နဲ့ လုပ်ချင်ရင်တော့ Array.from() နဲ့ ပြောင်းလို့ ရတယ်။
// console.log(lis[2]);

// lis[2].style.color = "red";
// lis[2].textContent = "Have to visit";
// lis[2].innerText = "Have to cook";
// lis[2].innerHTML = 'Have to read <a href="#" id="delete-item3" class="delete-item">delete</a>';

// Call by Tag Name (Element)
// const litags = document.getElementsByTagName('li');
// console.log(litags);
// console.log(litags[1]);

// litags[1].style.color = "blue";
// litags[1].innerHTML = `Have to cook <a href="#" id="delete-item2" class="delete-item">delete</a>`;

// Query Selector
// console.log(document.querySelector('#tasktitle'));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

// console.log(document.querySelector("li"));
// console.log(document.querySelector(".list-group-item"));

// document.querySelector("li").style.color = "blue";
// document.querySelector("ul li").style.color = "violet"; // ul ထဲက li ကို ခေါ်တာ
// document.querySelector("ul li:nth-child(odd)").style.color = "grey";
// document.querySelector("ul li:nth-child(even)").style.color = "silver";
// document.querySelector("ul li:last-child").style.color = "green";
// document.querySelector("ul li:last-of-type").style.color = "orange";
// document.querySelector("ul li:nth-of-type(4)").style.color = "steelblue";

// Query Selector All
// console.log(document.querySelectorAll('#tasktitle'));
// console.log(document.querySelectorAll('#tasktitle')[0]);

// console.log(document.querySelectorAll('.card-title'));
// console.log(document.querySelectorAll('.card-title')[0]);

// console.log(document.querySelectorAll('li'));
// console.log(document.querySelectorAll('li')[2]);

// console.log(document.querySelectorAll('.list-group-item'));
// console.log(document.querySelectorAll('ul .list-group-item')[3]);

// const listitems = document.querySelector('ul').getElementsByClassName('list-group-item');
// console.log(listitems); // HTML Collection နဲ့ လာတယ်။ HTML Collection က pure array မဟုတ်သလို သူကို forEach နဲ့လည်း looping ပတ်လို့ မရဘူး။ ဒါပေမဲ့ array နဲ့ လုပ်ချင်ရင်တော့ Array.from() နဲ့ ပြောင်းလို့ ရတယ်။ 
// console.log(typeof listitems); // object
// console.log(listitems[1]);

// const arritems = Array.from(listitems);
// console.log(arritems); // array နဲ့ ပြောင်းလို့ ရတယ်။

// arritems.forEach (function(arritem) {
//     console.log(arritem);
// });

// const listitems2 = document.querySelectorAll("ul.list-group li.list-group-item");
// console.log(listitems2); // NodeList(5)
// console.log(typeof listitems2); // object
// console.log(listitems2[1]);

// listitems2.forEach (function(listitem, idx) {
//     // console.log(listitem);

//     // listitem.innerText = `Hello World`;
//     listitem.innerText = `${++idx} Hello World`; // index ကို 1 ကနေ စတင်ချင်လို့ ++idx လုပ်ထားတာ
// });

// const lisodds = document.querySelectorAll('li:nth-child(odd)');
// console.log(lisodds); // ood li တွေ အကုန် ရလာမယ်။

// const lisevens = document.querySelectorAll('li:nth-child(even)');
// console.log(lisevens); // even li တွေ အကုန် ရလာမယ်။

// lisodds.forEach (function(lisodd) {
//     lisodd.style.color = "grey";
// });

// lisevens.forEach (function(liseven) {
//     liseven.style.color = "silver";
// });

// for(let i = 0; i < lisevens.length; i++) {
//     lisevens[i].style.backgroundColor = "orange";
// }


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
