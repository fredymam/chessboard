var tablero;
var jugada = 0;
				
function addJugada (source, target, piece, newPos, oldPos, orientation) {
	if (!(source == 'spare' || target == 'offboard') && (source != target)) {
		var parrafo = document.createElement("p");
		var movimiento = document.createTextNode(++jugada + '.');
		parrafo.appendChild(movimiento);
	    var trebejo = document.createElement("img");
	    trebejo.src = "img/chesspieces/wikipedia/"+piece+".png";
	    trebejo.style.width = "1.5em";
	    trebejo.style.height = "1.5em";
	    trebejo.style.verticalAlign = "text-bottom";
	    parrafo.appendChild(trebejo);
	    var coordenada = document.createTextNode(source + '-' + target);
	    parrafo.appendChild(coordenada);
	    document.getElementById("movimientos").appendChild(parrafo);	
	}
}

function dropMovimientos () {
  jugada = 0;
  const lista = document.getElementById("movimientos");
  while (lista.hasChildNodes()) {  
	  lista.removeChild(lista.firstChild);
  }	 
}

function loadDesafio (num) {
  dropMovimientos();
  if (num==0) {
	tablero.clear();
	document.getElementById("consigna").innerHTML = "";
  } else {
  	tablero.position(desafio[--num].posicion);
    document.getElementById("consigna").innerHTML = "<h3>"+desafio[num].titulo +"</h3>" + desafio[num].consigna;
  }
}

function inicializar() {
	tablero = Chessboard('tablero', {
                draggable: true,
                dropOffBoard: 'trash',
                sparePieces: true,
                showNotation: true,
                onDrop: addJugada});			
	$(window).resize(tablero.resize);	
	$('#flipBtn').on('click', tablero.flip);
	$('#clearBtn').on('click', function () { loadDesafio(0) });
	$('#quiz1Btn').on('click', function () { loadDesafio(1) });
	$('#quiz2Btn').on('click', function () { loadDesafio(2) });
	$('#quiz3Btn').on('click', function () { loadDesafio(3) });
	$('#quiz4Btn').on('click', function () { loadDesafio(4) });
}