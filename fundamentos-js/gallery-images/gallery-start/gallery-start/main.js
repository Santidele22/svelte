const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const darken = document.querySelector(".dark");
const overlay = document.querySelector(".overlay");

/* Declaring the array of image filenames */
/* Declaring the alternative text for each image file */
const images = [
  { src: "pic1.jpg", alt: "Una hermosa puesta de sol sobre el mar" },
  { src: "pic2.jpg", alt: "Un campo de flores coloridas en primavera" },
  { src: "pic3.jpg", alt: "Una vista panorámica de una ciudad moderna" },
  { src: "pic4.jpg", alt: "Un adorable cachorro jugando en el jardín" },
  { src: "pic5.jpg", alt: "Una montaña nevada bajo un cielo azul claro" },
];

/* Looping through images */
images.forEach((e) => {
  const newImage = document.createElement("img");
  newImage.setAttribute("src", `images/${e.src}`);
  newImage.setAttribute("alt", `${e.alt}`);

  newImage.onclick = () => {
    displayedImage.setAttribute("src", `images/${e.src}`);
    displayedImage.setAttribute("alt", `${e.alt}`);
  };

  thumbBar.appendChild(newImage);
});

/* Wiring up the Darken/Lighten button */
darken.addEventListener("click", () => {
  const className = darken.getAttribute("class");
  if (className === "dark") {
    darken.setAttribute("class", "light");
    darken.textContent = "Lighten";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  } else {
    darken.setAttribute("class", "dark");
    darken.textContent = "Darken";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }
});
