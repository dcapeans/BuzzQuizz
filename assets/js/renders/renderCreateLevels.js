const levelsArr = []

function renderCreateLevels() {
    const form = document.querySelector(".levels-info-form")
    form.innerHTML = "";

    for (let i = 1; i <= numberLevels; i++) {
        form.innerHTML += `
            <button type="button" data-target="level-form-${i}" class="input-list collapsed level-open-button">
                <span class="option-title">Nível ${i}</span>
                <ion-icon name="create-outline"></ion-icon>
            </button>
            <div id="level-form-${i}" class="input-list level-form hidden">
                <span class="option-title">Nível ${i}</span>
                <input 
                    data-validate="validateLevelTitle" 
                    type="text" 
                    placeholder="Título do nível" 
                    required 
                    name="level-title"/>
                <input
                    data-validate="validateScore"
                    type="number"
                    placeholder="% de acerto mínima"
                    name="level-minValue"
                    required
                />
                <input
                    data-validate="validateLevelUrl"
                    type="url"
                    placeholder="URL da imagem do nível"
                    name="level-img"
                    required
                />
                <input
                    data-validate="validateLevelDescription"
                    type="text"
                    placeholder="Descrição do nível"
                    name="level-description"
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
    const form = document.querySelector(".levels-info-form")

    form.addEventListener("submit", event => {
        event.preventDefault()
        if (validateLevelAll()) {
            submitLevelInfo()
            renderCreateDone()
            ShowCreateDone()
        } else {
            alert("Preencha os campos corretamente")
        }
        return false
    })
}

function submitLevelInfo() {
    const form = document.querySelector(".levels-info-form")
    const levels = form.querySelectorAll(".level-form")

    levels.forEach(level => {
        const levelsObj = {
            title: level.querySelector("[name=level-title]").value,
            image: level.querySelector("[name=level-img]").value,
            text: level.querySelector("[name=level-description]").value,
            minValue: parseInt(level.querySelector("[name=level-minValue]").value)
        }
        levelsArr.push(levelsObj)
    })
}