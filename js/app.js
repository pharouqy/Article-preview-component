tooltip();

function tooltip() {
  const btn = document.getElementById("share");
  const container = document.createElement("div");
  container.classList.add("tooltip");
  const texte = document.createElement("span");
  texte.textContent = "Share";
  container.appendChild(texte);
  const triangle = document.createElement("div");
  triangle.classList.add("triangle");
  container.appendChild(triangle);
  const array = ["fa-square-facebook", "fa-twitter", "fa-pinterest"];
  array.forEach((element) => {
    icone(element, container);
  })
  btn.addEventListener("mouseover", () => {
    btn.appendChild(container);
  });
  btn.addEventListener("mouseleave", () => {
    btn.removeChild(container);
  })
}

function icone(string, parent) {
  const icone = document.createElement("i");
  icone.classList.add("fa-brands", string);
  parent.appendChild(icone);
}