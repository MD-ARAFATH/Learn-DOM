console.log("Hello world");
console.log(document.body);

//option-1 ---getElementByTagName
const licollecttion = document.getElementsByTagName("li");
console.log(licollecttion);

//option-2 ---getElementById(using many tiimes)
window.onload = function () {
  let fruit = document.getElementById("fruit-titles");
  console.log(fruit.innerText);
};
//option-3 --getElemetsByClassName
const places = document.getElementsByClassName("important-place");
for (const place of places) {
  console.log(place.innerText);
}
// }

//option-4 --quarySelector (will return the first One)

//option-5 --quarySelectorAll(collecting the node list)
// const items = document.querySelectorAll(".fruits-container li");
// console.log(items);

//option-6
// element = document.getElementById("fruit-titles").style.textAlign="center";

const addValue = title.setAttribute("title", "hello java");
console.log(addValue);
