function handleFormOpenFactory(formSelector, buttonSelector) {
    return function (event) {
        //mostrar todos os botoes
        const buttons = document.querySelectorAll(buttonSelector)
        buttons.forEach(button => {
            button.classList.remove("hidden")
        })
        // esconder todos os forms
        const forms = document.querySelectorAll(formSelector)
        forms.forEach(form => {
            form.classList.add("hidden")
        })
        //esconder o botão clicado
        const button = event.currentTarget
        button.classList.add("hidden")
        //mostrar o form alvo do botão clicado
        const targetId = button.dataset.target
        const targetForm = document.querySelector(`#${targetId}`)
        targetForm.classList.remove("hidden")
    }
}




