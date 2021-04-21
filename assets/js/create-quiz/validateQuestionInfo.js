function InitQuestionButtonListener(){
    const form = document.querySelector("[name=questions-info]")


    form.addEventListener("submit", function(event){
        console.log("cliquei")
        event.preventDefault()
        if(validateAll()){
            // submitQuestionInfo()
            renderCreateLevels()
            ShowCreateLevels()
        } else {
            alert("Preencha corretamente os campos")
        }
        return false
    })
}

// <<------------------------------------------IMPLEMENTANDO AINDA ------------------------------------------------------>>

// function submitQuestionInfo() {
//     const form = document.querySelector("[name=basic-info]")
//     const valuesArr = form.querySelectorAll("input")
// }
