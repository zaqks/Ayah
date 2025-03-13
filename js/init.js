// LOAD THE BOOKMARKS
var surah = getCookie("surah");
var aya = getCookie("aya");

if (surah == null) surah = setCookie("surah", 1, 356);

if (aya == null) aya = setCookie("aya", 1, 356);

// SET THE SURAH NAME
setSurahName(surah - 1);
// SET THE AYA
setAya(surah - 1, aya - 1);
// SET THE IDS
setIds(surah, aya);
