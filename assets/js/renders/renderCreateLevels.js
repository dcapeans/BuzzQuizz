function renderCreateLevels() {
    const form = document.querySelector("[name=levels-info]")
    form.innerHTML = "";

    for (let i = 1; i <= numberLevels; i++) {
        form.innerHTML += `
            <button type="button" data-target="level-form-${i}" class="input-list collapsed level-open-button">
                <span class="option-title">Nível ${i}</span>
                <ion-icon name="create-outline"></ion-icon>
            </button>
            <div id="level-form-${i}" class="input-list level-form hidden">
                <span class="option-title">Nível ${i}</span>
                <input data-validate="validateLevelTitle" type="text" placeholder="Título do nível" required />
                <input
                    data-validate="validateScore"
                    type="number"
                    placeholder="% de acerto mínima"
                    required
                />
                <input
                    data-validate="validateLevelUrl"
                    type="url"
                    placeholder="URL da imagem do nível"
                    required
                />
                <input
                    data-validate="validateLevelDescription"
                    type="text"
                    placeholder="Descrição do nível"
                />
            </div>
        `
    }
    form.innerHTML += `
        <button
        class="creation-button"
        name="level-section-button">
            Finalizar Quizz
        </button>
    `
    document.querySelectorAll(".level-open-button").forEach(button => {
        button.addEventListener("click", handleFormOpenFactory(".level-form", ".level-open-button"))
    })

}

InitLevelButtonListener()

function InitLevelButtonListener() {
    const form = document.querySelector("[name=levels-info]")

    form.addEventListener("submit", event => {
        event.preventDefault()
        if(validateLevelAll()){
            //submitLevelInfo()
            renderCreateDone()
            ShowCreateDone()
        } else {
            alert("Preencha os campos corretamente")
        }
        return false
    })
}