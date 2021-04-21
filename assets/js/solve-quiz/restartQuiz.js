const result = document.querySelector('.result');
function restartQuiz() {
    renderOneQuiz(currentQuiz, false);
    showOrHide([], [result]);
}