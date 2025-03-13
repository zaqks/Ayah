// LOAD THE BOOKMARKS
var surah = getCookie("surah");
var aya = getCookie("aya");

if (surah == null) surah = setCookie("surah", 1, 365);
if (aya == null) aya = setCookie("aya", 1, 365);

surah = parseInt(surah);
aya = parseInt(aya);

// SET THE AYA
change_chapter(surah);
change_aya(aya);

//  LOAD CHAPS
load_chapters();
