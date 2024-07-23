// A $( document ).ready() block.
$( document ).ready(function() {

    console.log("the doc is ready!");
    
  // iss1 click btn load games. https://github.com/AnnaShannon2002/game-app/issues/1

  $('#btnLoadGames').on('click', function() {

    $('#gameList').empty();

    //IIFE = immediately invoked function expression
    
    console.log("clicked load games")
    console.log('more lines of code');

    console.log(gameList);

    $(gameList).each(function(index, value) {

      $('#gameList').append(`<li class="list-group-item"> ${value} </li>`)

    });

    
  
  });

  $('#btnClearGames').on('click', function() {

    $('#gameList').slideToggle(1000).empty();

  });
});

let gameList = [
  "Call of Duty: Modern Warfare",
  "Batman: Arkham Knight", 
  "Red Dead Redemption 2",
  "Minecraft",
  "Runescape"
]