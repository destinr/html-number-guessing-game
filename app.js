console.log("HELLO SIERRA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM
const guesses = [];

const randAnswer = Math.floor((Math.random()*(100)))

const returnGuessList = () => {
    let returnString = guesses.join("-")
    guessDiv = document.getElementById("prevGuesses")
    document.body.appendChild(guessDiv)
    guessDiv.innerHTML = "Previous guesses: "
    guessDiv.innerHTML += returnString
    
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
    gh.innerHTML = ""
    gh.innerHTML = `Guess ${currentGuess} is too small. Input a bigger number.`
    gh.style.backgroundColor = `rgb(256,0,0)`
    returnGuessList()
   }

   else if (currentGuess > randAnswer){
    gh.innerHTML = ""
    gh.innerHTML = `Guess ${currentGuess} is too big. Input a smaller number.`
    gh.style.backgroundColor = `rgb(256,0,0)`
    returnGuessList()
   } 

   document.body.appendChild(gh)
}

