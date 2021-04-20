function renderQuizzes(data) {
	const quizList = document.querySelector('.quizz-list');
	quizList.innerHTML = '';
	data.forEach((quiz) => {
		quizList.innerHTML += `
            <li>
                <article class="quizz-card" data-id="${quiz.id}" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url('${quiz.image}'); background-size: cover" onclick="getOneQuiz(this)">
                    <a href="#" class="quizz-title">${quiz.title}</a>
                </article>
            </li>`;
	});
}
