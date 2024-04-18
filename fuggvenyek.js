export function tablazatLetrehoz(lista) {
  let txt = `<div class="table-responsive">
        <table class="table table-striped">
        <thead>
        <tr>
        <th>Név</th>
        <th>Kor</th>
        <th>Nem</th>
        <th></th>
        </tr>
        </thead>
        <tbody>
  `;
  lista.forEach((element, index) => {
    txt += `
        <tr>
            <td>${element.nev}</td>
            <td>${element.kor}</td>
            <td>${element.nem ? "Férfi" : "Nő"}</td>
            <td id="${index}"><button>🗑️</button></td>
        </tr>
    `;
  });
  txt += "</tbody></table></div>";
  return txt;
}

export function megjelenit(txt) {
  const ELEM = $(".adatok");
  ELEM.html(txt);
}
