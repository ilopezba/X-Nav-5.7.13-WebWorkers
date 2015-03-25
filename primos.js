function work(){
  var worker = new Worker("webworker.js");

  worker.postMessage(document.getElementById("formulario").input.value);

  worker.onmessage = function(event) {
      document.getElementById('result').innerHTML = event.data;
  }
}
