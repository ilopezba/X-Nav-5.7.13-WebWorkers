function buscarPrimos(num) {
  var maximo = 100000;
  var envio=0;
  var n = 1;
  primelist = "";
  search: while (n<num) {
    n += 1;
    envio += 1;
    for (var i = 2; i <= Math.sqrt(n); i += 1)
      if (n % i == 0 )
        continue search;
    // found a prime!
        primelist += " " + n;
      if(envio < maximo){
	  envio = 0;
          self.postMessage(primelist);
      }
  } 
   return primelist;
};

  self.onmessage = function(event) {
      var primos = buscarPrimos(event.data);
      self.postMessage(primos);
  };
