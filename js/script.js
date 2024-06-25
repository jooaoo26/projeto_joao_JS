var meuFormulario = document.getElementById("formulario");
meuFormulario.addEventListener("submit", function(event) {
  event.preventDefault();

  adivinhacao();

});



function adivinhacao(){



  let numero_secreto=2;
  let palpite = document.getElementById('palpite').value;

do{
  if (palpite!=numero_secreto)
     numero_secreto="Tente novamente.";
}while {
        (palpite!=numero_secreto)
        numero_secreto="Parabéns,você conseguiu!!";
}


  document.getElementById("numero_secreto").value = numero_secreto;
