import { OBJEKTUMLISTA } from "./adat"

$(function(){
    
})
function osszealit(){
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