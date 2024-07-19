// To manipulate an element inside the DOM, You first need to select it
// and store a reference to it insade a variable

const link = document.querySelector("a");

// changing the text inside the link by updating the value of the link.textContent property
link.textContent = "Mozilla Developer Network";

// Changing URL the link is pointing to so it doesn't go to the wrong place
link.href = "https://developer.mozilla.org";

// Creating and placing new nodes

// Referencing to our <section> element
const sect = document.querySelector('section');

// Creating a new paragraph using Document.createElement()
const para = document.createElement("p");
para.textContent = "We hope you enjoyed the ride."

// we can now append the new paragraph at the end of the section using
// Node.appendChild() aka sect.appendChild(para);
sect.appendChild(para);

// Adding text node to the paragraph the link site inside
// First we will create the text node using Document.createTextNode():
const text = document.createTextNode(
    " - the premier source for web development knowledge.",
);

// we will grab a reference to the paragraph the link is inside, and append the text node
const linkPara = document.querySelector("p");
linkPara.appendChild(text);

// Moving and removing elements

// to move the paragaph with the link inside it to the bottom of the section, we could do this
sect.appendChild(linkPara);
// to make a copy and add that as well you'd use node.cloneNode()

// removing a node is simpe as well. in this case we would use Node.removeChild()
//sect.removeChild(linkPara);

// When you want to remove a node based only on a referenct to itself we us Element.remove()\
//linkPara.remove();

// This method is not supported in older browsers. They have no method to tell a node to remove itself.
// so you'd have to do this instead
// link.parentNode.removeChild(linkPara);

// Manipulating styles

// To start and get a list of all stylesheets attached to the doc using Document.stylesheets
//which will return an array-like object with cssstyleSheet objects

// to add inline styles directly onto an element you want to dynamically style.
// this is done with HTMLElement.style property

/* para.style.color = "white";
para.style.backgroundColor = "black";
para.style.padding = "10px";
para.style.width = "250px";
para.style.textAlign = "center";*/

// Element.setAttribute() useful method for general HTML manipulation
// two arguments, the attribute you want to set
// the valute you want to set it to
para.setAttribute("class", "highlight");