function renderUserQuizzes(data) {
    const localIds = localStorage.getItem('id');
    const myQuizzes = document.querySelector('.my-quizzes');
    let userQuizzes = [];

	if(localIds !== null) {
        const userIds = JSON.parse(localIds);
	    userQuizzes = data.filter((item) => userIds.includes(item.id));

        myQuizzes.innerHTML = `
        <div class="my-quizzes-head">
            <span>Seus Quizzes</span>
            <ion-icon
                name="add-circle"
                onclick="ShowCreateQuizz()"
            ></ion-icon>
        </div>
        <ul class="quizz-list"></ul>`;

        userQuizzes.forEach((quiz) => {
            myQuizzes.querySelector('.quizz-list').innerHTML += `
                <li>
                    <article class="quizz-card" data-id="${quiz.id}" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 65.62%, rgba(0, 0, 0, 0.8) 100%), url('${quiz.image}'); background-size: cover" onclick="getOneQuiz(this)">
                        <a href="#" class="quizz-title">${quiz.title}</a>
                    </article>
                </li>`;
        });
    }
}
