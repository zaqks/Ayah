// LOAD THE BOOKMARKS
var surah = parseInt(getCookie("surah"));
var aya = parseInt(getCookie("aya"));

if (surah == null) surah = setCookie("surah", 1, 356);

if (aya == null) aya = setCookie("aya", 1, 356);

// SET THE AYA
setAya(surah - 1, aya - 1).then(function (_) {
  if (_) {
    // SET THE SURAH NAME
    setSurahName(surah - 1);
    // SET THE IDS
    setIds(surah, aya);
  }
});
