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
  return Array.from(new Map(Object.entries(src)))[surah][1][aya]["text"];
}

// AYAT
function setSurahName(id) {
  fetchJson("data/json/chapters.json").then(function (_) {
    surah_name.innerText = _[id]["transliteration"];
  });
}

function setAya(surah, aya) {
  fetchJson("data/json/quran.json").then(function (_) {
    aya_ar.innerText = extract_text(_, surah, aya);
  });

  fetchJson("data/json/quran_en.json").then(function (_) {
    aya_en.innerText = extract_text(_, surah, aya);
  });
}

function setIds(surah, aya) {
  IDS.innerText = `${surah} - ${aya}`;
}

function aya_step(aya, indx) {  
    
}
