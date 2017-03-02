document.getElementById('enviar').onclick =function operacion(){
  var num1 = document.getElementById('num1').value;
  var num2 = document.getElementById('num2').value;
  var operacion = document.getElementById('operacion').value;

  function suma(a,b){
    return parseInt(a)+parseInt(b);}

  function resta(a,b){
    return parseInt(a)-parseInt(b);}

  function division(a,b){
    if(b!=0){
      return parseInt(a)/parseInt(b);
    }else{
      return "Valor indefinido";
    }
  }

  function multiplicacion(a,b){
    return parseInt(a)*parseInt(b);
  }

  function potencia(a,b) {
    return Math.pow(a,b);
  }

  var respuesta;
         if(operacion == 1){ respuesta = suma(num1,num2);}
    else if(operacion == 2){respuesta=resta(num1,num2);}
    else if(operacion == 3){respuesta= multiplicacion(num1,num2);}
    else if(operacion == 4){respuesta = division(num1,num2);}
    else if(operacion == 5){respuesta = potencia(num1,num2);}

  document.getElementById('resultado').innerHTML = respuesta;
}
document.getElementById('form').onsubmit=function(e){
 e.preventDefault();
}
