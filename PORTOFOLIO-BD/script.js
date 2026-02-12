function toggleMenu(){
  document.getElementById("sidebar").classList.toggle("active");
}

const texts = [
  "Gamers",
  "Desain Grafis",
  "Web Development",
  "Video Maker",
  "Fotografi",
  "Rapper"
];

let index = 0;
const typing = document.getElementById("typing");

function changeText(){
  typing.textContent = texts[index];
  index = (index + 1) % texts.length;
}

changeText();
setInterval(changeText, 2000);
