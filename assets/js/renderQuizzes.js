function renderQuizzes(data) {
    const quizList = document.querySelector('.quizz_list');
    quizList.innerHTML = '';
    data.forEach(quiz => {
        quizList.innerHTML += `
            <li>
                <article class="quizz_card" data-id="${quiz.id}" style="background-image: url('${quiz.image}');">
                    <a href="#" class="quizz_title">${quiz.title}</a>
                </article>
            </li>`;
    });
}
