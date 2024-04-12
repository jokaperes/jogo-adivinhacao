//variables
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//events

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener("keydown", handleEnter)

//callback
function handleTryClick(event){
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")
    if(inputNumber.value == ""){
        alert("Insira um valor")
        return
    }

    if(inputNumber.value > 10 || inputNumber.value < 0){
        alert("Apenas números de 0 a 10")   
        inputNumber.value = ""
        return
        
    }

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

       document.querySelector(".screen2 h2").innerText = "acertou em " + xAttempts + " tentativa(s)"
    }
    inputNumber.value = ""
    xAttempts++
    
}

function handleResetClick(){
    toggleScreen()
    xAttempts = 1

     randomNumber = Math.round(Math.random() * 10)

}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleEnter(e){
    if (e.key == "Enter" && screen1.classList.contains("hide")){
        handleTryClick()
        
    }
}




