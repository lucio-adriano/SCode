var input = document.querySelector("input");
var h3 = document.querySelector('#resultado');
var span = document.querySelector("span");
var resultado = "";

var botaoCodificar = document.querySelector("#codificar");
botaoCodificar.addEventListener("click", function(event) {
    event.preventDefault();
    h3.textContent = "Mensagem criptografada:";
    var palavra = input.value;
    resultado = criptografar(palavra);
    span.textContent = resultado;
});

var botaoDecodificar = document.querySelector("#decodificar");
botaoDecodificar.addEventListener("click", function(event) {
    event.preventDefault();
    h3.textContent = "Mensagem Descriptografada:";
    var palavra = input.value;
    resultado = descriptografar(palavra);
    span.textContent = resultado
});


document.querySelector("#copiar").onclick = function() {
    var element= document.getElementById('resultado');
    var range = document.createRange();
    range.selectNode(element);
    window.getSelection().addRange(range);
    document.execCommand("copy");
};

/* function copiar(){
  var copiar = document.querySelector('#copiar');
  copiar.addEventListener('click', function(){
  console.log('click');
  });

}*/

function criptografar(palavra){
  var criptada = "";
  for(var i = 0; i < palavra.length; i++){
    if(palavra[i] == "a"){
      criptada = criptada + "ai";
    }
    else if(palavra[i] == "e"){
      criptada = criptada + "enter";
    }
    else if(palavra[i] == "i"){
      criptada = criptada + "imes";
    }
    else if(palavra[i] == "o"){
      criptada = criptada + "ober";
    }
    else if(palavra[i] == "u"){
      criptada = criptada + "ufat";
    }else{
      criptada = criptada + palavra[i];
    }
  }
  return criptada;
}

function descriptografar(palavra){
  var ai = /ai/gi;
  var enter = /enter/gi;
  var imes = /imes/gi;
  var ober = /ober/gi;
  var ufat = /ufat/gi;

  var descriptada = palavra.replace(ai, "a");
  descriptada = descriptada.replace(enter, "e");
  descriptada = descriptada.replace(imes, "i");
  descriptada = descriptada.replace(ober, "o");
  descriptada = descriptada.replace(ufat, "u");
  return descriptada;
}
