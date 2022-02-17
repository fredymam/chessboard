var tablero;
var jugada = 0;
var desafios = ['1pppppp1/pppppppp/pppppppp/pppppppp/ppppQppp/pppppppp/pppppppp/Kpppppp1',
				'8/8/8/8/PPP5/NNBP4/RBNP4/KRNP4',
				'2r5/1p1n4/P1pbq3/1P1p1k2/2P1pbn1/3P1p1r/4P1p1/N4P2',
				'8/8/8/8/PP6/8/2P5/rnb5'];

function addJugada (source, target, piece, newPos, oldPos, orientation) {
	if (!(source == 'spare' || target == 'offboard')) {
		var parrafo = document.createElement("p");
		var movimiento = document.createTextNode(++jugada + '. ');
		parrafo.appendChild(movimiento);
	    var trebejo = document.createElement("img");
	    trebejo.src = "img/chesspieces/wikipedia/"+piece+".png";
	    trebejo.style.width = "1.8em";
	    trebejo.style.height = "1.8em";
	    trebejo.style.verticalAlign = "text-bottom";
	    parrafo.appendChild(trebejo);
	    var coordenada = document.createTextNode(source +'-'+ target);
        parrafo.appendChild(coordenada);
	    document.getElementById("notacion").appendChild(parrafo);	
	}
}

function dropMovimientos () {
  jugada = 0;
  const lista = document.getElementById("notacion");
  while (lista.hasChildNodes()) {  
	  lista.removeChild(lista.firstChild);
  }	 
}

function loadDesafio (num) {
  dropMovimientos();
  if (num==0) tablero.clear()
  else tablero.position(desafios[--num]);	
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