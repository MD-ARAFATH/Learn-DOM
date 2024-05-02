console.log("Hello world");
console.log(document.body);
const licollecttion = document.getElementsByTagName("li");
console.log(licollecttion);
const fruit = document.getElementById("fruit-titles");
console.log(fruit.innerText);

const places = document.getElementsByClassName("important-place");
for (const place of places) {
  console.log(place.innerText);
}
