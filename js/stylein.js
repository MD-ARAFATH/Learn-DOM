const sections = document.querySelectorAll("section");
for (const section of sections) {
  section.style.border = "5px";

  section.style.marginBottom = "5px";
  section.style.padding = "20px";
  section.style.backgroundColor = "gray";
}

let PlacesContainer = document.getElementById("Places-container");
PlacesContainer.classList.add("text-center");
PlacesContainer.classList.remove("large-text");
