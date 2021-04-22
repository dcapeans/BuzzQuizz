const question = []

function InitQuestionButtonListener(){
    const form = document.querySelector("[name=questions-info]")


    form.addEventListener("submit", function(event){
        event.preventDefault()
        if(validateQuestionAll()){
            submitQuestionInfo()
            renderCreateLevels()
            ShowCreateLevels()
        } else {
            alert("Preencha os campos corretamente")
        }
        return false
    })
}

function submitQuestionInfo() {
    const form = document.querySelector("[name=basic-info]")
    const valuesArr = form.querySelectorAll("input")
}
