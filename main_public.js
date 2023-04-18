import { OBJEKTUMLISTA } from "./adat.js"

$(function(){
    init(OBJEKTUMLISTA)
});
function init(lista){
    let cards=card_maker(OBJEKTUMLISTA);
    const ARTICLEELEM=$("article");
    ARTICLEELEM.html(cards);
    const FOTOTERELEM=$("footer")
    $("#nagyitas").click(function(){
        console.log("volt")
        let card=event.target.footer
        console.log(card)
        let tarto=nagyitas(card)
        FOTOTERELEM.html(tarto);
    })

};
function card_maker(OBJEKTUMLISTA){
    let txt="<div class='container-fluid mt-3'>";
    txt +="<h2>'Kutyák'</h2>";
    txt +='<div class="row">'
    let szamolo=0
    console.log(OBJEKTUMLISTA["nev"])
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        
        txt+='<div class="col p-3".col>'
        txt+=`<div class="card bg-secondary text-white" id=${index}>`;
        const object=OBJEKTUMLISTA[index]
        for (const key in object) {
            if (key === "nev"){
                txt+=`<div class="card-header">${object[key]}</div>`;
            }
            else{
                txt+=`<div class="card-body">${object[key]}</div>`;
            }
        }
        txt+=`<div class="card-footer" id=nagyitas><input type="button" value="nagyitas" name=${szamolo}></div>`;
        szamolo=szamolo+1;
        console.log(szamolo)
        txt+='</div>';
        txt+='</div>'
    }
    txt+='</div>'
    txt+="</div>";
    return txt
}
function nagyitas(card){
    let txt=`<div class="card bg-secondary text-white">`;
    const object=OBJEKTUMLISTA[card]
        for (const key in object) {
            if (key === "nev"){
                txt+=`<div class="card-header">${object[key]}</div>`;
            }
            else{
                txt+=`<div class="card-body">${object[key]}</div>`;
            }
        }
        txt+='</div>';
        return txt
        
}