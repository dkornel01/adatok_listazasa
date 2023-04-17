import { OBJEKTUMLISTA } from "./adat.js"

$(function(){
    init(OBJEKTUMLISTA)
});
function init(lista){
    let cards=card_maker(OBJEKTUMLISTA);
    const ARTICLEELEM=$("article");
    ARTICLEELEM.html(cards);
};
function card_maker(OBJEKTUMLISTA){
    let txt="<div class='container-fluid mt-3'>";
    txt +="<h2>'Kutyák'</h2>";
    txt +='<div class="row">'
    console.log(OBJEKTUMLISTA["nev"])
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        txt+='<div class="col p-3".col>'
        txt+='<div class="card">';
        const object=OBJEKTUMLISTA[index]
        for (const key in object) {
            if (key === "nev"){
                txt+=`<div class="card-header">${object[key]}</div>`;
            }
            else{
                txt+=`<div class="card-body">${object[key]}</div>`;
            }
        } 
        txt+='</div>';
        txt+='</div>'
    }
    txt+='</div>'
    txt+="</div>";
    return txt
}