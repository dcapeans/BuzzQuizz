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
                <input type="text" placeholder="Título do nível" required />
                <input
                    type="number"
                    placeholder="% de acerto mínima"
                    min="0"
                    max="100"
                    required
                />
                <input
                    type="text"
                    placeholder="URL da imagem do nível"
                    required
                />
                <input
                    type="text"
                    placeholder="Descrição do nível"
                    minlength="30"
                />
            </div>
        `
    }
    form.innerHTML += `
        <button
        class="creation-button"
        name="level-section-button"
        onclick="ShowCreateDone()">
            Finalizar Quizz
        </button>
    `
    document.querySelectorAll(".level-open-button").forEach(button => {
        button.addEventListener("click", handleFormOpenFactory(".level-form", ".level-open-button"))
    })

}