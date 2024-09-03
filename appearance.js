function OpenPlayerAppear(event) {
    const SelectedPlayerId = +event.target.dataset.playerid; 
    EditedPlayer = SelectedPlayerId; 
    playerAppearOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerAppear() {
    playerConfigOverlayElement.style.display ='none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    FormElement.firstElementChild.lastElementChild.value='';
  }

function savePlayerAppear(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); // '      ' => ''
  
    if (!enteredPlayername) { // enteredPlayername === ''
      event.target.firstElementChild.classList.add('error');
      errorsOutputElement.textContent = 'Please enter a valid name!';
      return;
    }
  
  const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerAppear();  
}