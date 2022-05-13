const lista1= [
    100,
    200,
    300,
    500,
];
 let sumalista1=0;
let contLista=0;
 for( let i=0; i<lista1.length; i++){
     sumalista1= sumalista1 + sumalista1[i];
 }
 let promedio= sumalista1/lista1.length;

 function calcularPromedio(lista){
     let sumaLista=0;
     for(let i=0; i<lista.length;i++){
         sumaLista= sumaLista+sumaLista[i];

     }
     promedio= sumaLista/lista.length;
     return promedio;
 };
 //hace lo mismo, pero se puede usar para * u otras cosas, recorre los elementos de un array
 function calcularMediaAritmetica(lista){
 const sumalista= lista.reduce(
     function(valorAcumulado=0, nuevoElemento){
         return valorAcumulado+ nuevoElemento;
     }
 );
 const promedioLista =sumalista/lista.length;
 return promedioLista
    }