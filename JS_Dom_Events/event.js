console.log("hello world");

//option-2(important using this)
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option-3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

const purpleButton = document.getElementById("make-purple");
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

//option-4

const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);

function makePink() {
  document.body.style.backgroundColor = "pink";
}

//option-4 (Another)
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

//option-4 (Final Method Using This Method)

const orangeButton = document
  .getElementById("make-orange")
  .addEventListener("click", function makeOrange() {
    document.body.style.backgroundColor = "orange";
  });
