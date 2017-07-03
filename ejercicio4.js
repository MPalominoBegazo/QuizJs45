var n= prompt("Ingrese un numero");

dibujarTriangulo(n);

function dibujarTriangulo(n){

    for (var i = 0; i < n; i++) {
      var sp = espacios (n - (i+1));
      var content = "";
      for (j = 0; j < i+i; j++)
        content +=  j;
      console.log(sp + content);
    }
}


function espacios (numsp)
{
  var str = "";
  for (var i = 0; i < numsp; i++){
    str += " ";
  }
  return str;
}
