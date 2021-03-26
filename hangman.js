//diffrent categories and the words
var sports = [
    "SOCCER", "BASKETBALL",  "TENNIS", "SWIMMING", "RUGBY", "VOLLEYBALL", "AFL", "ATHLETICS", "MARATHON", "CRICKET" ]
   
    var food = [
    "APPLE", "CARROT", "PORK", "BEEF", "LAMB", "LETTUS", "ORANGE", "TOMATO", "STRAWBERRY", "CORN" ]
    
  var furniture = [
    "SOFA", "DESK", "CHAIR", "CUPBOARD", "BED", "BOOKCASE", "CABINET", "TABLE", "CLOCK", "DRESSER" ]
    
  var technology = [
    "LAPTOP", "TV", "PHONE", "TABLET", "DESKTOP", "CONTROLLER", "SPEAKER", "HEADPHONE", "KEYBOARD", "MOUSE" ]
    
  var animals = [
    "DOG", "CAT", "BIRD", "COW", "HORSE", "PIG", "ELEPHANT", "TIGER", "MONKEY", "FROG" ]
  
  //selects random word from the category
  function randomWord() {
      answer = food[Math.floor(Math.random()*food.length)]
      console.log(answer)
    }
    
    //creates variables needed in game
    let answer = ''
    let maxWrong = 10
    let mistakes = 0
    let guessed = []
    let WordStatus = null
   
  //creates the buttons for letters to select to guess the word
  function generateButtons() {
      let buttonsHTML = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(letter =>
        `
          <button
            class="btn btn-lg btn-primary m-2"
            id='` + letter + `'
            onClick="handleGuess('` + letter + `')"
          >
            ` + letter + `
          </button>
        `).join('')
    
      document.getElementById('keyboard').innerHTML = buttonsHTML
  }
  
  //displays random word from the category and displays it as underlines
  function guessedWord() {
      wordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
      document.getElementById('UnderScore').innerHTML = wordStatus;
    }
  
    document.getElementById('maxWrong').innerHTML = maxWrong
  
    //makes the buttons for letters function
    function handleGuess(chosenLetter) {
      guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null
      document.getElementById(chosenLetter).setAttribute('disabled', true)
     
    //function for when letter is correctly guessed
    if (answer.indexOf(chosenLetter) >= 0) {
      guessedWord()
      checkIfgameWon()
    }
  
  //function for when letter is incorrectly chosen
  else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++
  
    checkIfgameLost()
    updatePicture()
  }
    }
  
  //display if the user has correctly guseed the word (if the user wins) 
  function checkIfgameWon() {
    if (wordStatus === answer) 
    alert("You Won! :)")
  }
  
  //display if the user could not correctly guess the word (if the user loses)
  function checkIfgameLost() {
    if(mistakes === maxWrong)
    alert("You Lost! :(")
  }
  
  //updates/draws hangman picture when user incorrectly guesses the word
  function updatePicture() {
    document.getElementById('hangmanPicture').src = './images/hangman' + mistakes + '.jpg'
  }
  
  //fucntions the "newword" button (resets everything and displays new word to guess)
  function reset() {
    mistakes = 0
    guessed = []
    document.getElementById('hangmanPicture').src = './images/hangman0.jpg'
  
    randomWord()
    guessedWord()
    generateButtons()
  }
  
  randomWord()
  generateButtons()
  guessedWord()
  updatePicture()