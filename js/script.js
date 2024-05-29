var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  consoante();

});



function consoante(){
  
  

  let letra = document.getElementById("letra").value;

 

  if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
    resultado_letra = A letra "${letra}" é vogal;
  } else {
    resultado_letra = A letra "${letra}" é consoante;
  }

  document.getElementById("resultado_letra").value = resultado_letra;
}
