console.log("hello world")
console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return  lado* lado;
}
console.groupEnd();
function calcularPerimetroCuadrado(){
    const input=document.getElementById("inputCuadrado");
    const value= input.value;
    const perimetro= perimetroCuadrado(value);
    alert(perimetro);   

}
function calcularAreaCuadrado(){
    const input= document.getElementById("inputCuadrado");
    const value= input.value;
    const area= areaCuadrado(value);
    alert(area);
}