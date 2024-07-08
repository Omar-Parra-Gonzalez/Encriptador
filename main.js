
function encriptar(){
    let texto= document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");
    let muñeco= document.getElementById("muñeco");
 
    let textoCifrado=texto
        .replace(/e/gi,"enter")
        .replace(/i/gi,"imes")
        .replace(/a/gi,"ai")
        .replace(/o/gi,"ober")
        .replace(/u/,"ufat")

    if(texto.length !=0){
        document.getElementById("texto").value= textoCifrado;
        tituloMensaje.textContent= "Texto encriptado con exito";
        parrafo.textContent= "";
        muñeco.src= "./imagenes/encriptado.gif";
    }else{
        muñeco.src= "./imagenes/texto.gif";
        tituloMensaje.textContent= "Ningún mensaje fue encontrado"
        parrafo.textContent= "Ingresa el texto que desees encríptar o desencriptar.";
        swal("ooops!", "Debes ingresar algun texto", "warning");
    }    
}

function desencriptar(){
    let texto= document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo= document.getElementById("parrafo");
    let muñeco= document.getElementById("muñeco");

    let textoCifrado=texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/,"u")
    if(texto.length !=0){
        document.getElementById("texto").value= textoCifrado;
        tituloMensaje.textContent= "Texto desencriptado con exito";
        parrafo.textContent= "";
        muñeco.src= "./imagenes/desencriptado.gif";
    }else{
        muñeco.src= "./imagenes/texto.gif";
        tituloMensaje.textContent= "Ningún mensaje fue encontrado"
        parrafo.textContent= "Ingresa el texto que desees encríptar o desencriptar.";
        swal("ooops!", "Debes ingresar algun texto", "warning");
    }
}
