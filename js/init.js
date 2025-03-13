// LOAD THE BOOKMARKS
var surah = parseInt(getCookie("surah"));
var aya = parseInt(getCookie("aya"));

if (surah == null) surah = setCookie("surah", 1, 356);

if (aya == null) aya = setCookie("aya", 1, 356);

// SET THE AYA
change_chapter(surah)
change_aya(aya)

//  LOAD CHAPS
load_chapters();
