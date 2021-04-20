function createQuizz() {
    const myQuizzes = document.querySelector('.my-quizzes');
    const allQuizzes = document.querySelector('.all-quizzes');
    const creation = document.querySelector('.creation-quizz');

    showOrHide([creation], [myQuizzes, allQuizzes]);
}