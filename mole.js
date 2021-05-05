function popUpRandomMole() {
  const moles = document.querySelectorAll(".wgs__mole-head");
  let randNum = Math.floor(Math.random() * moles.length),
    molesIdx = moles[randNum];

  molesIdx.classList.remove("wgs__mole-head--hidden");

  setTimeout(() => {
    hideMole(molesIdx);
  }, 1000);
}

function hideMole(mole) {
  mole.classList.add("wgs__mole-head--hidden");
  setTimeout(() => {
    popUpRandomMole();
  }, 1000);
}

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    popUpRandomMole();
  }, 0);
});
