const chaps = document.getElementById('chapters')
const chaps_lst = document.getElementById("lst");

function load_chapters() {
  chaps_lst.innerHTML = "";

  fetchJson("data/json/chapters.json").then(function (_) {
    var elem, name, trns;
    _.forEach((key, indx) => {
      trns = _[indx]["translation"];
      name = _[indx]["name"];

      chaps_lst.innerHTML += `<tr onclick="change_chapter(${indx+1}); chaps.classList.toggle('hide');"><td>${indx}</td><td>${trns}</td><td>${name}</td></tr>`;
    });
  });
}
