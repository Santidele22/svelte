//Variables
let myImage = document.querySelector("img");
let myBtn = document.querySelector("button");
let miTitle = document.querySelector("h1");
//Function
function startingApp() {
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    miTitle.textContent = "Mozilla is cool, " + storedName;
  }
}

startingApp();

function setUserName() {
  let miName = prompt("Please, enter your name");
  if (!miName) {
    alert("Please enter a valid name!");
    setUserName();
  } else {
    localStorage.setItem("Name", miName);
    miTitle.textContent = "Mozilla is cool, " + miName;
  }
}

//Events
myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

myBtn.addEventListener("click", () => {
  setUserName();
});
