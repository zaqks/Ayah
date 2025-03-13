// CHAPTS
document.getElementById("surah").onclick = function () {
  document.location.href = "chapters.html";
};

function change_aya(nw) {
  setAya(surah - 1, nw - 1).then(function (_) {
    if (_) {
      aya = nw;

      update_bookmark(surah, nw);
      setIds(surah, nw);
    }
  });
}

// MOVES
document.getElementById("prev").onclick = () => change_aya(aya - 1);
document.getElementById("next").onclick = () => change_aya(aya + 1);
