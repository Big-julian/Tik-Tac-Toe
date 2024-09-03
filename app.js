const players = [
  {
    name: '',
    symbol: 'X'
  },
  {
    name: '',
    symbol: 'Y'
  },
];

const playerAppearOverlayElement = document.getElementById("appear-overlay");
const backdropElement = document.getElementById('backdrop');
const errorsOutputElement = document.getElementById('appear-errors');

const updatePlayer1BtnElement = document.getElementById("update-player-1-btn");
const updatePlayer2BtnElement = document.getElementById("update-player-2-btn");
const FormElement= document.querySelector('form')

const cancelappearElement= document. getElementById("cancel-appear-btn")


updatePlayer1BtnElement.addEventListener("click", OpenPlayerAppear);
updatePlayer2BtnElement.addEventListener("click", OpenPlayerAppear);

cancelappearElement.addEventListener('click', closePlayerAppear );
backdropElement.addEventListener("click", closePlayerAppear);

FormElement.addEventListener('submit',savePlayerAppear);
