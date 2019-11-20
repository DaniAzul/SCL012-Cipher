window.cipher = {
  encode: (numero, mayuscula) => {
    console.log(numero);
    //console.log(mayuscula);
let resultado ="";
for (let i=0; i < mayuscula.length; i++) {
 //console.log("hola")
let traducido= mayuscula.charCodeAt(i);
// console.log(traducido);

if (traducido >= 65 && traducido <= 90) {
 let letra = (traducido - 65 + numero) % 26 + 65;
     
 let cifrado = String.fromCharCode(letra);
  //console.log(cifrado);
  resultado += cifrado;
}
}
//console.log(resultado);

return resultado;
    
  },
  decode: (numero, mayuscula) => {
    
    //console.log(mayuscula);
  let resultado= "";
  for (let i=0; i< mayuscula.length; i++) {
  let traducido= mayuscula.charCodeAt(i);
  console.log(traducido)
  if(traducido >= 65 && traducido <= 90){
  let letra = (traducido + 65 - numero) % 26 + 65;
  let descifrado = String.fromCharCode(letra);
  console.log(descifrado)
  resultado += descifrado;
  }
}
  return resultado;
  }
};
