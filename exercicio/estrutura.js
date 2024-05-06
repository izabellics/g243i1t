const Fila = (_locaSaida) => {
  let locaSaida = _locaSaida;
  let dados = []
  const tamanho = () => dados.length;
  const estaVazia = () => dados.length < 1;
  const enfileirar = valor => {
    dados.push  (valor);
    imprimir(); 
  }
  const desenfileirar = () => {
    dados.splice(0,1);
    imprimir();
  }
const imprimir = () => {
  console.log (dado);
  dado_saida = "";
  for(let i = 0; i < tamanho (); i ++){
        dado_saida += dados [i].id + "("+dados[i].itens+")";
  }
  document.getElementById(locaSaida).innerHTML = dado_saida;
}

  const Cliente = (_id, _itens) => {
  return {
    id: _id,
    itens: _itens
  }
 }
const gerarItens = () => Math.floor(Math.random() * (10 - 3) +2);
const tamanhoInicialFila = 15; 
 (function(){
    for(let i= 1; i <= tamanhoInicialFila; i++){
    f1. enfileirar(Cliente("P"+i, gerarItens()));
  }

 })};







// inserir = valor => {
// dados.push(valor);
//    imprimir();
//  }
// remover = () => {
//       let removido = null;
//       if(tamanho() > 0){
//         removido = dados[0];
//         dados.splice(0,1);
//         imprimir();
//       }
 //     return removido;
//  }
// tamanho = () => dados.length;
 //imprimir = () => {
 //  document.getElementById("saida_fila").innerHTML = dados;
// }
 //return {
 //  inserir,
 //  remover,
 //  tamanho, 
 //  imprimir
// };

//let fila = Fila();

//document.getElementById("btnInserir").onclick = function(){
 //   fila.inserir(document.getElementById("valor").value);
 //   document.getElementById('valor').value = "";
 //   document.getElementById('valor').focus();
//};
//document.querySelector("#valor").onkeyup = function(e){
//    if(e.keyCode == 13){
 //       fila.inserir(document.getElementById('valor').value);
 //       document.getElementById('valor').value = "";
 //       document.getElementById('valor').focus();
//    }
//};
//document.querySelector("#btnRemover").onclick = function(){
//    document.getElementById("removido_fila").innerHTML = fila.remover();
//};