function renderCreateDone() {
    const section = document.querySelector(".quizz-done")
    section.innerHTML = `
        <p class="creation-page-title">Seu quizz está pronto!</p>
        <img src="${quizzObject.image}" alt="" />
        <button class="creation-button access-quizz-button" onclick="renderOneQuiz(quizzObject, false)">Acessar Quizz</button>
        <button class="back-home-button" onclick="showHomepage()">
            Voltar para home
        </button>
    `
}