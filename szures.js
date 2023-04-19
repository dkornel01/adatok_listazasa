export function szures(lista,kulcs,szuresfeltetel){
    const RESULT = lista.filter(function(a){
        return a[kulcs].includes(szuresfeltetel)
    })
    return RESULT
}
export function szuresszam(lista,kulcs,szuresfeltetel){
    let szurtLista=lista.filter(function(obj){
        console.log((obj[kulcs]+szuresfeltetel))
        return eval(obj[kulcs]+szuresfeltetel)
    })
    return szurtLista
}