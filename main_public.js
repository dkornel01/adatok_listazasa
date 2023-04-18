import { OBJEKTUMLISTA } from "./adat.js"

$(function(){
    init(OBJEKTUMLISTA)
});
function init(lista){
    let cards=card_maker(OBJEKTUMLISTA);
    const ARTICLEELEM=$("article");
    ARTICLEELEM.html(cards);
    let card
    $("#nagyitas0").click(function(){
        card=event.target.name
        nagyitas(card,ARTICLEELEM)
        select(card,ARTICLEELEM)
    })
    $("#nagyitas1").click(function(){
        card=event.target.name
        nagyitas(card,ARTICLEELEM)
        select(card,ARTICLEELEM)      
    })
    $("#nagyitas2").click(function(){
        card=event.target.name
        nagyitas(card,ARTICLEELEM)
        select(card,ARTICLEELEM)       
    })
    $("#nagyitas3").click(function(){
        card=event.target.name
        nagyitas(card,ARTICLEELEM)
        select(card,ARTICLEELEM)       
    })
    $("#nagyitas4").click(function(){
        card=event.target.name
        nagyitas(card,ARTICLEELEM)
        select(card,ARTICLEELEM)   
    })

};
function select(card,ARTICLEELEM){
    $("#job").click(function(){
        card=parseInt(card)
        if ((card+1)<5){
            card=(card+1)
            nagyitas(card,ARTICLEELEM)
            select(card,ARTICLEELEM)
        }
    })
    $("#bal").click(function(){
        if ((card-1)>-1){
        card=(card-1)
        nagyitas(card,ARTICLEELEM)
        }
        select(card,ARTICLEELEM)
    })
    $("#alap").click(function(){
        init()
    })
}
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
        txt+=`<div class="card-footer" id=nagyitas${szamolo}><input type="button" value="nagyitas" name=${szamolo}></div>`;
        szamolo=szamolo+1;
        console.log(szamolo)
        txt+='</div>';
        txt+='</div>'
    }
    txt+='</div>'
    txt+="</div>";
    return txt
}
function nagyitas(card,ARTICLEELEM){
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
            txt+="<div class='container-fluid mt-3'>"
            txt +='<div class="row">'
            txt+='<div class="col p-3".col>'
                txt+='<input type="button" id="bal" value="elözö" name=bal>'
            txt+='</div>'
            txt+='<div class="col p-3".col>'
                txt+='<input type="button" id="alap" value="alap" name=jobb>'
            txt+='</div>'
            txt+='<div class="col p-3".col>'
                txt+='<input type="button" id="job" value="következö" name=jobb>'
            txt+='</div>'
            txt+='</div>'
            txt+='</div>'   
            ARTICLEELEM.html(txt);
}