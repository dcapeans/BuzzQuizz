function accessQuiz(quizzObject) {
    const banner = document.querySelector('.quizz-banner');
    const questions = document.querySelector('.questions');
    const section = document.querySelector(".quizz-done");
    renderOneQuiz(quizzObject, false);
    showOrHide([banner, questions], [section]);
}