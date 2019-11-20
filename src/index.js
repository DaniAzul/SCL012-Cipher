/*Acá va tu código*/
/* Botón para codificar*/
document.getElementById("btn1").addEventListener("click", function(){
    firstPage.style.display = "none";
    secondPage.style.display = "block";
});
/* Botón para decodificar */
document.getElementById("btn2").addEventListener("click", function(){
  firstPage.style.display = "none";
  secondPage.style.display = "none";
  thirdPage.style.display = "block";
});
/*Botón para volver */
document.getElementById("btn4").addEventListener("click", function(){
  firstPage.style.display = "block";
  secondPage.style.display = "none";
  thirdPage.style.display = "none";
});
document.getElementById("btn6").addEventListener("click", function(){
  firstPage.style.display = "block";
  secondPage.style.display = "none";
  thirdPage.style.display = "none";
})
/* texto ingresado*/

/*linkear boton con funcion para codificado*/
const botonTraduccion= document.getElementById("btn3");

botonTraduccion.addEventListener ("click", () =>{
  let offset = document.getElementById("offsetNumber").value;
//console.log(offset);

let textUser = document.getElementById("textToTranslate").value;
//console.log(textUser);

const mayuscula = textUser.toUpperCase();
const numero = parseInt(offset);

/*Traduccion lista*/
let translatedText = document.getElementById("translatedText");
translatedText.innerHTML= window.cipher.encode(numero,mayuscula);
})
/*document.getElementById("translatedText").innerHTML = resultado;*/

/* linkear boton con función para decodificado*/
let botonTraduccionOtro= document.getElementById("btn5");
botonTraduccionOtro= addEventListener("click", () => {
  let offset = document.getElementById("offsetNumber2").value;
  //console.log(offset)
let textUser= document.getElementById("textToTranslate2").value;
const mayuscula = textUser.toUpperCase();
const numero = parseInt(offset);
let translatedText2 = document.getElementById("translatedText2");
translatedText2.innerHTML=window.cipher.decode(numero,mayuscula);
})
/* Botón de copiado de texto
function myFunction() {
  let copyText = document.getElementById("translatedText");
}
function myFunction2() {
  let copyText = document.getElementById("translatedText2");
}*/

/*Botón de limpiar texto*/
document.getElementById("clearBtn1").addEventListener("click", function clearForm() {
document.getElementById("codeForm").reset();
})
document.getElementById("clearBtn2").addEventListener("click", function clearForm2() {
  document.getElementById("decoForm").reset();
})