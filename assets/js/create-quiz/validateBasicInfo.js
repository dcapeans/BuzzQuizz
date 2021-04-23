let numberQuestions;
let numberLevels;

InitBasicButtonListener()

function InitBasicButtonListener(){
    const form = document.querySelector(".basic-info-form")

    form.addEventListener("submit", function(event){
        event.preventDefault()
        submitBasicInfo()
        ShowCreateQuestion()
        form.reset()
        return false
    })
}

function submitBasicInfo() {
    const form = document.querySelector(".basic-info-form")
    const valuesArr = form.querySelectorAll("input")
    
    quizzObject.title = valuesArr[0].value
    quizzObject.image = valuesArr[1].value
    numberQuestions = valuesArr[2].value
    numberLevels = valuesArr[3].value
}