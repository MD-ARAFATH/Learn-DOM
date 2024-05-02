const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "1px";
  section.style.marginBottom = "5px";
  section.style.padding = "20px";
  section.style.backgroundColor = "lightgrey";
}

let placesContainer = document.getElementById("places-container");
placesContainer.style.backgroundColor = "white";
