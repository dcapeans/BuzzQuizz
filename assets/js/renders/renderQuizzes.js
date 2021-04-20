function renderQuizzes(data) {
	const quizList = document.querySelector('.quizz-list');
	quizList.innerHTML = '';
	data.forEach((quiz) => {
		quizList.innerHTML += `
            <li>
                <article class="quizz-card" data-id="${quiz.id}" style="background-image: url('${quiz.image}');" onclick="getOneQuiz(this)">
                    <a href="#" class="quizz-title">${quiz.title}</a>
                </article>
            </li>`;
	});
}
