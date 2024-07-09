// A $( document ).ready() block.
$( document ).ready(function() {

    console.log("the doc is ready!");
    
  // iss1 click btn load games. https://github.com/AnnaShannon2002/game-app/issues/1

  //what dom ?
  // $('#btnLoadGames').click(function() {

  // $('main').fadeIn(3000);

  $('#btnLoadGames').on('click', function() {

    $('#gameList').empty();

    //IIFE = immediately invoked function expression
    
    console.log("clicked load games")
    console.log('more lines of code');

    //the best way...backticks and decorators..
    // ` backtick

    console.log(gameList);

    // $('#gameList').append(`<li class="list-group-item"> ${ gameList[0] } </li>`);

    //another way is to \'
    // $('#gameList').append('<li>Call of Duty: Modern Warfare</li>');

    // $('#gameList').append(`<li>Call of Duty: Modern Warfare</li>`);

    // meh.
    // $('#gameList').append("<li class=\"list-group-item\">" + gamesList[0] + "</li>");

    //loop through the array 
    //the traditional...for loop.
    // for (i = 0; i < gameList.length; i++) {
    //    $('#gameList').append(`<li class="list-group-item"> ${gameList[i]} </li>`);
    // }

    $(gameList).each(function(index, value) {

      $('#gameList').append(`<li class="list-group-item"> ${value} </li>`)

    });

    
  
  });

  $('#btnClearGames').on('click', function() {

    $('#gameList').slideToggle(1000).empty();

  });
  

  //dom .. load in data ..
  //more code here
});


/* this is kinda what vanilla js looks like.
var el;
el.document.gerElementByTagName('button');
el.addEventListener('click', ) */

// make a data thingy: array (list)
// var => let or const = 22/7

let gameList = [
  "Call of Duty: Modern Warfare",
  "Batman: Arkham Knight", 
  "Red Dead Redemption 2",
  "Minecraft",
  "Runescape"
]