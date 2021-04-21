function ShowCreateQuizz() {
    const myQuizzes = document.querySelector('.my-quizzes');
    const allQuizzes = document.querySelector('.all-quizzes');
    const creation = document.querySelector('.creation-quizz');

    showOrHide([creation], [myQuizzes, allQuizzes]);
}

function ShowCreateQuestion() {
    const createQuestion = document.querySelector("[name=questions]")
    const creation = document.querySelector('.creation-quizz');

    renderCreateQuestion()
    showOrHide([createQuestion], [creation])
}

function ShowCreateLevels() {
    const createQuestion = document.querySelector("[name=questions]")
    const createLevels = document.querySelector("[name=levels]")

    renderCreateLevels()
    showOrHide([createLevels], [createQuestion])
}

function ShowCreateDone() {
    const createLevels = document.querySelector("[name=levels]")
    const createDone = document.querySelector("[name=quizz-done]")

    showOrHide([createDone], [createLevels])
}