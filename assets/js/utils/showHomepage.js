function showHomepage() {
    const myQuizzes = document.querySelector('.my-quizzes');
    const allQuizzes = document.querySelector('.all-quizzes');
    const toHide = document.querySelectorAll('body > *:not(.hidden):not(header)');
    showOrHide([myQuizzes, allQuizzes], toHide);
}