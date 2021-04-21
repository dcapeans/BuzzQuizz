function renderCreateQuestion() {
    const form = document.querySelector("[name=questions-info]")
    form.innerHTML = "";

    for (let i = 1; i <= numberQuestions; i++) {
        form.innerHTML += `
        <button type="button" data-target="question-form-${i}" class="input-list collapsed question-open-button" data-name="question-${i}-tab">
            <span class="option-title">Pergunta ${i}</span>
            <ion-icon name="create-outline"></ion-icon>
        </button>

        <div id="question-form-${i}" class="input-list hidden question-form" data-name="question-${i}">
            <span class="option-title">Pergunta ${i}</span>
            <input data-validate="validateText"
                type="text"
                placeholder="Texto da pergunta"
                minlength="20"
            />
            <input data-validate="validateColor"
                type="text"
                placeholder="Cor de fundo da pergunta (em hexadecimal)"
            />
            <span class="option-title">Resposta correta</span>
            <input data-validate="validateAnswer"
                data-required="required"
                type="text"
                placeholder="Resposta correta"
            />
            <input data-validate="validateUrl" data-required="required" type="url" placeholder="URL da imagem" />
            <span class="option-title">Resposta incorreta</span>
            <input data-validate="validateAnswer"
                data-required="required"
                type="text"
                placeholder="Resposta incorreta 1"
            />
            <input data-validate="validateUrl" data-required="required" type="url" placeholder="URL da imagem 1"  />
            <div class="spacer"></div>
            <input data-validate="validateAnswer" type="text" placeholder="Resposta incorreta 2" />
            <input data-validate="validateUrl" type="url" placeholder="URL da imagem 2" />
            <div class="spacer"></div>
            <input data-validate="validateAnswer" type="text" placeholder="Resposta incorreta 3" />
            <input data-validate="validateUrl" type="url" placeholder="URL da imagem 3" />
        </div>
        `
    }
    form.innerHTML += `
        <button class="creation-button" name="question-section-button">
            Prosseguir para criar níveis
        </button>
    `
    document.querySelectorAll(".question-open-button").forEach(button => {
        button.addEventListener("click", handleFormOpenFactory(".question-form", ".question-open-button"))
    })

    document.querySelector("[name=question-section-button]").addEventListener("click", ShowCreateLevels)
}