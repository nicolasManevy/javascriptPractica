const salariosArg= argentina.map(
    function(persona){
        return persona.salary;
    }
);
const salariosArgSorted= salariosArg.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB;
    }
);
function espar(numero){
    return(numero % 2 == 0);
};
function calcularMediaAritmetica(lista){
    const sumalista= lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+ nuevoElemento;
        }
    );
    const promedioLista =sumalista/lista.length;
    return promedioLista
       };

function medianaSalarios(lista){
    const mitad= parseInt(lista.length/2);
    if (espar(lista.length)){
        const personaMitad1= lista[mitad-1];
        const personaMitad2= lista[mitad];
        const mediana= calcularMediaAritmetica([personaMitad1,personaMitad2]);
        return mediana;
    }
    else{
        const personaMitad= lista[mitad];
        return personaMitad;
    }
};
//top 10 salarios
const spliceStart=(salariosArgSorted.length * 90) / 100;
const spliceCount=salariosArgSorted.length - spliceStart;

const top10salarios= salariosArgSorted.splice(
    spliceStart,
    spliceCount,
);

const medianatop10= medianaSalarios(top10salarios);

const medianaSalarialGeneral= medianaSalarios(salariosArgSorted);
console.log({
    medianaSalarialGeneral,
    medianatop10,
    
});