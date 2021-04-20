function renderOneQuiz(quiz) {
    const banner = document.querySelector('.quizz-banner');
    const questions = document.querySelector('.questions');
    const myQuizzes = document.querySelector('.my_quizzes');
    const allQuizzes = document.querySelector('.all_quizzes');

    banner.innerHTML = `<p>${quiz.title}</p>`;
    banner.style.backgroundImage = `url(${quiz.image})`;

    showOrHide(banner, questions, myQuizzes, allQuizzes);
}
