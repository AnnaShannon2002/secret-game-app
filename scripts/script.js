// A $( document ).ready() block.
$( document ).ready(function() {

    // console.log("the doc is ready!");

    loadGameData("gameList");

    addEvents();
    
  // $('#btnLoadGames').on('click', function() {

  //   $('#gameList').empty();

    
  //   console.log("clicked load games")
  //   console.log('more lines of code');

  //   console.log(gameList);

  //   $(gameList).each(function(index, value) {

  //     $('#gameList').append(`<li class="list-group-item"> ${value} </li>`)

  //   });
  
  // });

  // $('#btnClearGames').on('click', function() {

  //   $('#gameList').slideToggle(1000).empty();

  // });
});

function loadGameData(appendId) {

  let appendElement = $(`#${appendId}`);

  appendElement.empty();

  $.each(data.games, (index, game)=>{
    appendElement.append(`
      <li id="gameNo${index}Name" class="list-group-item mb-1 gameName">
      ${game.name}

      <ul class"list-group gameDetails">
        <li class="input-group w-100">
          <span class="w-20 input-group-text">developer</span>
            <input id="gameNo${index}DeveloperEdit" name="developer" type="text" class="form-control editGame" value="${game.developer}">
        </li>
        <li class="input-group w-100">
          <span class="w-20 input-group-text">singleplayer</span>
            <input id="gameNo${index}SingleplayerEdit" name="singleplayer" type="text" class="form-control editGame" value="${game.singleplayer}">
        </li>
        <li class="input-group w-100">
          <span class="w-20 input-group-text">multiplayer</span>
            <input id="gameNo${index}MultiplayerEdit" name="multiplayer" type="text" class="form-control editGame" value="${game.multiplayer}">
        </li>
        <li class="input-group w-100">
          <span class="w-20 input-group-text">tags</span>
            <input id="gameNo${index}TagsEdit" name="tags" type="text" class="form-control editGame" value="${game.tags}">
        </li>
      </ul>
    </li>`);

      $('.gameDetails').hide();
      $('input.editGame').prop('readonly', true);

  });

}

function addEvents(){
  $('.gameName').on('click', (e)=> {

    let $this = $(e.target);
    let $thisId = $this.attr('id');

    $('#'+ $thisId +' > ul.gameDetails').toggle();

    $('#'+ $thisId +' > i.editGame').toggle();

  });

  $('#btnHideAll').on('click', (e)=> {
    $('ul.gameDetails').hide();
  });
  
  $('#btnShowAll').on('click', (e)=> {

  $('ul.gameDetails').show();

  });

  $('input.editGame').on('click', (e)=> {

    let $this = $(e.target);
    $this.prop('readonly', false);

  })

  $('#btnSaveGame').on('click', ()=> {

    data.games.push({
      name : $('#gameAddName').val(),
      developer : $('#gameAddDeveloper').val(),
      singleplayer : $('#gameAddSingleplayer').val(),
      multiplayer : $('#gameAddMultiplayer').val(),
      tags : $('#gameAddTags').val()
    });

    loadGameData("gameList");
    addEvents();

    $('#addGameModal .btn-close').click()
    $('#addGameModal input').val('');

  });

  $('input.editGame').on('blur', (e)=> {

    let $this = $(e.target);
    let $thisId = $this.attr('id');
    let $thisKey = $this.attr('name');
     console.log($this.key);

    let regexDigit = /\d+/g;
    let gameIndex = $thisId.match(regexDigit)[0];


    data.games[gameIndex][$thisKey] = $this.val();

    $(e.target).prop('readonly', true);

  });

  $('#btnConsoleData').on('click', ()=> {
    console.log(data.games); 
  });
}
