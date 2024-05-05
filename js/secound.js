console.log("secound js");

const secoundList = document.getElementsById("secound-list");

const li = document.createElement("li");
li.innerText = "my dynamic item";
secoundList.appendChild(li);
