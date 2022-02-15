var board;
var jugada = 0;

function onDrop (source, target, piece, newPos, oldPos, orientation) {
	if (!(source == 'spare' || target == 'offboard')) {
	    jugada++;
	    const movimiento = document.createTextNode(jugada + '. ' + piece + ' ' +  source + '-' + target); 
	    const parrafo = document.createElement("p");
	    parrafo.appendChild(movimiento);
	    document.getElementById("notacion").appendChild(parrafo);		
	}
}

function dropMovimientos () {
  board.clear;
  const lista = document.getElementById("notacion");
  while (lista.hasChildNodes()) {  
	  lista.removeChild(lista.firstChild);
}

function inicializar() {
	board = Chessboard('tablero', {
                draggable: true,
                dropOffBoard: 'trash',
                sparePieces: true,
                showNotation: true,
                onDrop: onDrop});			
	$(window).resize(board.resize);				
	$('#startBtn').on('click', board.start);
	$('#flipBtn').on('click', board.flip)
	$('#clearBtn').on('click', dropMovimientos);
	$('#quiz1Btn').on('click', function () { board.position({a1: 'wK', e4: 'wQ'}) });
	$('#quiz2Btn').on('click', function () { board.position('8/8/8/8/PPP5/NNBP4/RBNP4/KRNP4') });
	$('#quiz3Btn').on('click', function () { board.position('2r5/1p1n4/P1pbq3/1P1p1k2/2P1pbn1/3P1p1r/4P1p1/N4P2') });
	$('#quiz4Btn').on('click', function () { board.position('8/8/8/8/PP6/8/2P5/rnb5') });
}

