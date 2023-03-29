import { OBJEKTUMLISTA } from "./adat"

$(function(){
    let tarto=osszealittablazat(OBJEKTUMLISTA)
    
})
/*function osszealit(){
    let txt='<table class="table">';
    txt +='<table class="table-dark"';
    txt +='<tr>'
    txt +='<th id="nev">'
    txt +='"név"'
    txt +='</th>'
    txt +='<th id="kor">'
    txt +='"kor"'
    txt +='</th>'
    txt +='<th id="fajta">'
    txt +='"fajta"'
    txt +='</th>'
    txt +='<th>'
    txt +='</th>'
    txt +='</tr>'
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        txt+='<tr>'
        for (const nev in OBJEKTUMLISTA) {
            if (Object.hasOwnProperty.call(OBJEKTUMLISTA, nev)) {
                const element = OBJEKTUMLISTA[nev];
                txt +=`<td>${element}</td>`
            }
        }
        for (const kor in OBJEKTUMLISTA) {
            if (Object.hasOwnProperty.call(OBJEKTUMLISTA, kor)) {
                const element = OBJEKTUMLISTA[kor];
                txt +=`<td>${element}</td>`
            }
        }
        for (const fajta in OBJEKTUMLISTA) {
            if (Object.hasOwnProperty.call(OBJEKTUMLISTA, fajta)) {
                const element = OBJEKTUMLISTA[fajta];
                txt +=`<td>${element}</td>`
            }
        }
        txt+='</tr>'
    }

}*/
function osszealittablazat(lista) {
  let txt= "<div class='table-responsive'>";
  txt +="<table class='table table-stripped table-bordered table-hover'>";
  txt +="<thead class='table-dark'><tr>";
  for (const key in kulcslista){
    txt+=`<th id='${key}' > ${kulcsLista[key]} </th>`
  }
  txt += "<th></th></tr ></thead>";
  for (let index = 0; index < lista.length; index++) {
    txt+= "<tr>";
    const OBJECT=lista[index]
    for (const key in object) {
      if (key==='nev') {
        txt += `<th> ${element} </th>`
      } else{
        txt += `<td> ${element}</td>`
      }
    }
    txt+= `<td><button class="btn torol id="t${index}"> </button></td>`;
    txt+="</tr>"
  }
  txt +="</table>"
  txt +="</div>"
  return txt
  
}
/*function Osszalait(){
    let txt=`<table class="table">
    <thead class="table-dark">
      <tr>
        ${for (let index=0;index<osszealit.length;index){
            
        }}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>john@example.com</td>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>july@example.com</td>
      </tr>
    </tbody>
  </table>`
    
 }*/