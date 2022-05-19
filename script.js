'use strict'

                                    // Losování - Náhodný číslo 1-49
const startButton = document.querySelector('.shakeBake')
let winningNumbers = []


function randomNumber(min = 1, max = 49) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

                                    // zdvojení jednociferných
function DoubleDigit(num) {
    if (num.toString().length == 1) {
        num = "0" + num
    }
    return num
}

function makeMilions(){
    let numbers = document.querySelector('.numbers')
    let picked = []

    for(let i = 1; i <= 6; i++) {
        let newDiv = document.createElement('div')
  
        newDiv.classList.add('ballStyle')
        numbers.appendChild(newDiv)

        let results;

        if (picked.length != 6) {
            do {
                results = DoubleDigit( randomNumber())
            } while (picked.indexOf(results) > -1);
            picked.push(results);
        }
        
        newDiv.textContent = results
     }

}

startButton.addEventListener('click', function() {
    let numbers = document.querySelector('.numbers')

    //Vyprázdnění pole
    numbers.textContent = ' '

    //nový los
    makeMilions()
})


                        // Zvolená čísla

let tipNumber = Array.from (document.querySelectorAll('.tipButton'))
let betNumber = []
let pickedNumber = document.querySelector('.luckyNumbers')
let newNumber = []

tipNumber.map(x => x.addEventListener('click', () => {
    if(betNumber.length < 6){

        if(x.classList.contains('focusedButton')) {
            return
        }
        
    x.classList.toggle('focusedButton')
    betNumber.push(x.textContent)
    
    
    newNumber.push(x.textContent)
    newNumber.textContent = (x.textContent)
    pickedNumber.textContent = newNumber
        
        }
    })
)

                                //New game
let newGame = document.querySelector('.newGame')
newGame.addEventListener('click', () => {location.reload()
return false})




