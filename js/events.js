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

// FULLSCREEN
IDS.addEventListener("click", function () {
  const element = document.documentElement; // Target the root <html> element

  if (!document.fullscreenElement) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      /* Safari */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      /* IE11 */
      element.msRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  }
});
