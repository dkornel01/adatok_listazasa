import { OBJEKTUMLISTA } from "./adat.js";
import { kulcsLista } from "./adat.js";
import { szures, szuresszam } from "./szures.js";
import { RendezesKorszerint, RendezesNevÉsFajtaszerni } from "./rendezes.js";

$(function () {
  const EREDETI=OBJEKTUMLISTA
  init(OBJEKTUMLISTA,EREDETI);
});
function init(lista,EREDETI) {
  let tarto = osszealittablazat(lista, kulcsLista);
  const ARTICLEELEM = $("article");
  ARTICLEELEM.html(tarto);
  const SZURESIFELTETELEK = $("aside input");
  SZURESIFELTETELEK.on("keyup", function () {
    tablazatSzures(lista);
  });
  $("th").click(function () {
    let kulcs = event.target.id;
    rendezes(lista, kulcs);
  });
  $("#alap").click(function(){
    console.log("volt")
      init(EREDETI,kulcsLista)
    })
  $("#felvetel").click(function(){
    let neve=$("#elnevezes").val()
    let kora=parseInt($("#eltkora").val())
    let faja=$("#fajtaja").val()
    console.log(kora)
    let rossz=isNaN(kora)
    if (rossz!=true){
      let footerelem=$("footer");
      let semmi=""
      footerelem.html(semmi)
      let lis=OBJEKTUMLISTA
      lis.push({nev:neve,kor:kora,fajta:faja})
      console.log(lis)
      init(lis)
    }
    else{
      let footerelem=$("footer");
      let hiba="<div class='bg-danger'>"
      hiba+="nem megfelelő adatokat adott meg"
      hiba+="</div>"
      footerelem.html(hiba)
      init(lista)
    }
    })
    let torles
    $("#törles").click(function(){
      torles=event.target.name
      lista.splice(torles,1)
      init(lista)
    })
    

  /*  FAJIN.on("keyup",tablazatSzures("fajok",FAJIN,ARTICLEELEM,))
  KORIN.on("keyup",tablazatSzures("kor",KORIN,ARTICLEELEM,)) */
}
function tablazatSzures(lista) {
  /**event.target */
  let kulcs = event.target.id;
  let nevertek = event.target.value;
  let szurealista = [];
  if (OBJEKTUMLISTA.length>lista.length){
    if (typeof OBJEKTUMLISTA[0][kulcs] === "number") {
      szurealista = szuresszam(OBJEKTUMLISTA, kulcs, nevertek);
    } else {
      szurealista = szures(OBJEKTUMLISTA, kulcs, nevertek);
    }
  }
  else{
    if (typeof OBJEKTUMLISTA[0][kulcs] === "number") {
      szurealista = szuresszam(lista, kulcs, nevertek);
    } else {
      szurealista = szures(lista, kulcs, nevertek);
    }
  }
  
 
  init(szurealista);
}
function rendezes(lista, kulcs) {
  if (typeof lista[0][kulcs] === "number") {
    RendezesKorszerint(lista, kulcs);
  } else {
    RendezesNevÉsFajtaszerni(lista, kulcs);
  }
  init(lista)
}

function osszealittablazat(lista, kulcsLista) {
  let txt = "<div class='table-responsive'>";
  txt += "<table class='table table-stripped table-bordered table-hover table-responsive'  id='table'>";
  txt += "<thead class='table-dark'><tr>";
  let szamlalo=0;
  for (const key in kulcsLista) {
    txt += `<th id='${key}' > ${kulcsLista[key]} </th>`;
  }
  txt += "<th></th></tr ></thead>";
  for (let index = 0; index < lista.length; index++) {
    txt += "<tr>";
    const OBJECT = lista[index];
    for (const key in OBJECT) {
      if (key === "nev") {
        txt += `<th> ${OBJECT[key]} </th>`;
      } else {
        txt += `<td> ${OBJECT[key]}</td>`;
      }
    }
    txt += `<td><input type="button" id="törles" value="törles" name=${szamlalo}>`;
    szamlalo=szamlalo+1
    txt += "</tr>";
  }
  txt += "</table>";
  txt += "</div>";
  txt += "<div class='inputs_box'>"
  txt += '<input type="text" id="elnevezes" placeholder="elnevezes" name="nev">'
  txt += '<input type="text" id="eltkora" placeholder="eltkora" name="kor">'
  txt += '<input type="text" id="fajtaja" placeholder="fajtaja" name="fajta">'
  txt += "</div>";
  txt += "<div class='felvevo'>"
  txt += '<input type="submit" id="felvetel" placeholder="felvetel" name="Új Felvetele">'
  txt += "</div>";
  return txt;
}