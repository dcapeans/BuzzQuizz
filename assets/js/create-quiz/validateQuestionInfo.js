function InitQuestionButtonListener(){
    const form = document.querySelector("[name=questions-info]")

    form.addEventListener("submit", function(event){
        event.preventDefault()
        submitQuestionInfo()
        ShowCreateLevels()
        return false
    })
}

function submitQuestionInfo() {
    const form = document.querySelector("[name=basic-info]")
    const valuesArr = form.querySelectorAll("input")
    
    quizzObject.title = valuesArr[0].value
    quizzObject.image = valuesArr[1].value
    numberQuestions = valuesArr[2].value
    numberLevels = valuesArr[3].value
}