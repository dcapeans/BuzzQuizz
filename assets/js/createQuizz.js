function createQuizz() {
    const myQuizzes = document.querySelector('.my-quizzes');
    const allQuizzes = document.querySelector('.all-quizzes');
    const creation = document.querySelectorAll('.creation-quizz');

    showOrHide(myQuizzes, allQuizzes, ...creation);
}