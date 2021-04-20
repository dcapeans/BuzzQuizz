function renderOneQuiz(quiz, fromHome) {
    const banner = document.querySelector('.quizz-banner');
    const questions = document.querySelector('.questions');
    const myQuizzes = document.querySelector('.my-quizzes');
    const allQuizzes = document.querySelector('.all-quizzes');

    banner.innerHTML = `<p>${quiz.title}</p>`;
    banner.style.backgroundImage = `url(${quiz.image})`;
    questions.innerHTML = '';

    quiz.questions.forEach(question => {
        const shuffledAnswers = shuffleArray(question.answers);
        let answersView = '';

        shuffledAnswers.forEach(answer => {
            let classCorrect = answer.isCorrectAnswer ? 'correct' : '';

            answersView += `
                <figure class="${classCorrect}" onclick="selectAnswer(this)">
                    <img src="${answer.image}" />
                    <figcaption>${answer.text}</figcaption>
                </figure>`;
        });

        questions.innerHTML += `
            <li class="quizz-question">
                <div class="title" style="background-color: ${question.color};">
                    <p>${question.title}</p>
                </div>
                <div class="options">
                    ${answersView}
                </div>
            </li>`;
    });

    if(fromHome) showOrHide([banner, questions], [myQuizzes, allQuizzes]);
}
