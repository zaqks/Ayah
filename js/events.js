// CHAPTS
const chapters = document.getElementById("chapters");

document.getElementById("surah").onclick = function () {
  chapters.classList.toggle("hide");
};

document.getElementById("chaps_ttl").onclick = function () {
  chapters.classList.toggle("hide");
};

// MOVES
document.getElementById("prev").onclick = () => change_aya(aya - 1);
document.getElementById("next").onclick = () => change_aya(aya + 1);
