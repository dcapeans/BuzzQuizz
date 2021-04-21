// InitQuestionButtonListener()

function InitQuestionButtonListener(){
    const form = document.querySelector("[name=questions-info]")

    form.addEventListener("submit", function(event){
        event.preventDefault()
        submitQuestionInfo()
        ShowCreateLevels()
        return false
    })
}

// <<------------------------------------------IMPLEMENTANDO AINDA ------------------------------------------------------>>

function submitQuestionInfo() {
    const form = document.querySelector("[name=basic-info]")
    const valuesArr = form.querySelectorAll("input")
    
    
}

