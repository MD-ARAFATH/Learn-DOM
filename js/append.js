//1.where do add
const placesList = document.getElementById("places-list");

//2.what to add
const li = document.createElement("li");
li.innerText = "vatican city";

//3.add the child
placesList.appendChild(li);

//1.where do add
const mainContainer = document.getElementById("main-container");

//what to be added
const section = document.createElement("section");
const h1 = document.createElement("h1");
h1.innerText = "Food List";
section.appendChild(h1);

const ul = document.createElement("ul");
const li1 = document.createElement("li");
li1.innerText = "Pizza";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "briyani";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "burger";
ul.appendChild(li3);

section.appendChild(ul);

mainContainer.appendChild(section);

//section innner html directly
const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h2>Clothes</h2>
<ul>
    <li>Shirt</li>
    <li>Jeans</li>
</ul>

`;
mainContainer.appendChild(sectionDress);
