function openLetter() {
  const welcome = document.getElementById("welcome");
  const letter = document.getElementById("letter");

  welcome.style.display = "none";
  letter.style.display = "flex";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
