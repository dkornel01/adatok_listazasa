export function RendezesKorszerint(lista, kulcs) {
  lista.sort(function (a, b) {
    return a[kulcs]-(b[kulcs]);
  });


}
export function RendezesNevÉsFajtaszerni(lista, kulcs) {
  lista.sort(function (a, b) {
    let ertek = 1;
    if (a[kulcs].toUpperCase() < b[kulcs].toUpperCase()) {
      ertek = -1;
    }
    return ertek;
  });
}
