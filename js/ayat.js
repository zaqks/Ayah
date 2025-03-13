// CONSTS
const surah_name = document.getElementById("surah");
const IDS = document.getElementById("IDS");

const aya_en = document.getElementById("aya_en");
const aya_ar = document.getElementById("aya_ar");
//JSON
async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
}

function extract_text(src, surah, aya) {
  try {
    return Array.from(new Map(Object.entries(src)))[surah][1][aya]["text"];
  } catch (error) {
    return null;
  }
}

// AYAT
function setSurahName(id) {
  fetchJson("data/json/chapters.json").then(function (_) {
    surah_name.innerText = _[id]["transliteration"];
  });
}

async function setAya(surah, aya) {
  var _ = await fetchJson("data/json/quran.json");
  var nw = extract_text(_, surah, aya);
  if (nw != null) aya_ar.innerText = nw;

  _ = await fetchJson("data/json/quran_en.json");
  nw = extract_text(_, surah, aya);
  if (nw != null) aya_en.innerText = nw;

  return nw != null;
}

function setIds(surah, aya) {
  IDS.innerText = `${surah} : ${aya}`;
}

function change_aya(nw) {
  setAya(surah - 1, nw - 1).then(function (_) {
    if (_) {
      aya = nw;

      update_bookmark(surah, nw);
      setIds(surah, nw);
    }
  });
}

function change_chapter(nw) {
  setAya(nw - 1, 0).then(function (_) {
    if (_) {
      aya = 1;
      surah = nw;

      setSurahName(surah - 1);

      update_bookmark(nw, aya);
      setIds(surah, aya);
    }
  });
}
