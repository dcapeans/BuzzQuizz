function ShowCreateQuizz() {
    const myQuizzes = document.querySelector('.my-quizzes');
    const allQuizzes = document.querySelector('.all-quizzes');
    const creation = document.querySelector('.creation-quizz');

    resetQuizzObject()
    showOrHide([creation], [myQuizzes, allQuizzes]);
}

function ShowCreateQuestion() {
    const createQuestion = document.querySelector(".creation-questions")
    const creation = document.querySelector('.creation-quizz');

    renderCreateQuestion()
    showOrHide([createQuestion], [creation])
}

function ShowCreateLevels() {
    const createQuestion = document.querySelector(".creation-questions")
    const createLevels = document.querySelector(".creation-levels")

    showOrHide([createLevels], [createQuestion])
}

function ShowCreateDone() {
    const createLevels = document.querySelector(".creation-levels")
    const createDone = document.querySelector(".quizz-done")

    showOrHide([createDone], [createLevels])
}