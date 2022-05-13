function moda(lista){
   const listaCount={};
    lista.map(
        function(elemento){
            if(listaCount[elemento]){
                listaCount[elemento] +=1;
            }
            else{
                listaCount[elemento]=1;
            }
        }
    )
   return listaCount;


}
 const listaArray= Object.entries(listaCount).sort(
      function(valorAcumulado,nuevoVAlor){
        return  valorAcumulado[1]-nuevoVAlor[1];
        }
 );
 const moda= listaArray[listaArray.length-1];
 