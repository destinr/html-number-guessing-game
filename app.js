console.log("HELLO SIERRA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
const guesses = [];

const randAnswer = Math.floor((Math.random()*(100)))

const guessDiv = document.getElementById("prevGuesses")
guessDiv.innerHTML = "Previous guesses: "

const returnGuessList = () => {
    let lastGuess = guesses.slice(-1)
    guessDiv.innerHTML += lastGuess + " "
    
}

const acceptGuess = () => {
   let currentGuess = parseInt(document.getElementById("guess").value)
   guesses.push(currentGuess)
   gh = document.getElementById('guessHandler')
   
   if (currentGuess === randAnswer){
    gh.innerHTML = ""
    gh.innerHTML = "Correct!"
    gh.style.backgroundColor = `rgb(0,256,0)`
   }

   else if (currentGuess < randAnswer){
    //gh.innerHTML = ""
    gh.innerHTML = `Guess ${currentGuess} is too small. Input a bigger number.`
    gh.style.backgroundColor = `rgb(256,0,0)`
    returnGuessList()
   }

   else if (currentGuess > randAnswer){
    //gh.innerHTML = ""
    gh.innerHTML = `Guess ${currentGuess} is too big. Input a smaller number.`
    gh.style.backgroundColor = `rgb(256,0,0)`
    returnGuessList()
   } 

   document.getElementById("numGuesses").innerHTML = `Number of guesses: ${guesses.length}`
}

