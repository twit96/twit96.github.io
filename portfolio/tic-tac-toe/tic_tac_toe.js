// Tic-Tac-Toe Functionality --------------------------------------------------
var turn = 0;
var symbols = ["X", "O"];
var played = ["","","","","","","","",""];

// button click event
$("button").click(function(e) {

  // generate current symbol
  var symbol = symbols[turn];

  // ensure button doesn't already have value
  if (!$(this).html()) {

    // update value and played array
    $(this).html(symbol);
    played[e.target.id] = symbol;

    // check for winner
    if (check_win(symbol)) {
      alert(String(symbol) + " has won!");  // alert winner
      update_score(symbol);  // update scoreboard

    // update turn counter if no winner
    } else {
      turn = (turn+1)%(symbols.length);
    }
  }
});


// Win Functionality ----------------------------------------------------------
function is_equal(a, b, c) {
  /*
    function to check equality of three nonempty values.
    called by check_win function.
  */
  if (a == b && b == c && c != "") {
    return true;
  }
}

function check_win(symbol) {
  /*
    function to check for three in a row on board (hard coded).
    Called after button click updates board.
  */
  // check rows
  if (is_equal(played[1],played[2],played[3])) {
    return true;
  } else if (is_equal(played[4],played[5],played[6])) {
    return true;
  } else if (is_equal(played[7],played[8],played[9])) {
    return true;

  // check columns
  } else if (is_equal(played[1],played[4],played[7])) {
    return true;
  } else if (is_equal(played[2],played[5],played[8])) {
    return true;
  } else if (is_equal(played[3],played[6],played[9])) {
    return true;

  // check diagonals
  } else if (is_equal(played[1],played[5],played[9])) {
    return true;
  } else if (is_equal(played[3],played[5],played[7])) {
    return true;
  }
}


// Scoreboard Functionality ---------------------------------------------------
var score_x = 0;
var score_o = 0;

function update_score(symbol) {
  /*
  function to add to player scores.
  Called after button click if game has winner.
  */

  if (symbol == "X") {
    score_x++;
    document.getElementById('score_x').innerHTML = String(score_x);
  } else if (symbol == "O") {
    score_o++;
    document.getElementById('score_o').innerHTML = String(score_o);
  }
  else { console.log("Error in update_score() - no symbol"); }
}


// Replay Functionality -------------------------------------------------------
function reset_board() {
  /*
  function to reset game. Called on replay button click
  */

  // reset board
  for (i=1;i<10;i++) {
    document.getElementById(i).innerHTML = "";
    played[i] = "";
  }

  // reset turn
  turn = 0;
}

// replay button click event
$("#replay").click(reset_board);
