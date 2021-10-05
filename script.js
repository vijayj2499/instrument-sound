const tabla = new Audio("t.mp3");
const basari = new Audio("b.mp3");
const dhol = new Audio("d.mp3");

document.addEventListener("keydown", (e) => {
  if (e.key == "p") {
    basari.pause();
    tabla.pause();
    dhol.pause();
  }
  if (e.key == "t") {
    tabla.play();
  }
  if (e.key == "b") {
    basari.play();
  }
  if (e.key == "d") {
    dhol.play();
  }
});
