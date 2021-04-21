function showQuizResult() {
	const correct = document.querySelectorAll('.selected.correct');
	const correctRate = correct === null ? 0 : ((correct.length / currentQuiz.questions.length) * 100);
	const reachedLevelValue = currentQuiz.levels
                            .filter((level) => level.minValue < correctRate)
                            .map(level => level.minValue)
                            .reduce((acc, cur) => {
                                if(cur > acc) acc = cur;
                                return acc;
                            }, 0);
    const [reachedLevel] = currentQuiz.levels.filter(level => level.minValue === reachedLevelValue);
    console.log({correct, correctRate, reachedLevelValue, reachedLevel});
    result.innerHTML = `
        <div class="quizz-result">
            <div class="title">
                <p>
                    ${correctRate.toFixed(0)}% de acerto: ${reachedLevel.title}
                </p>
            </div>
            <figure>
                <img src="${reachedLevel.image}" />
                <figcaption>
                    ${reachedLevel.text}
                </figcaption>
            </figure>
        </div>
        <button onclick="restartQuiz()">
            Reiniciar Quizz
        </button>
        <button onclick="showHomepage()">Voltar pra home</button>`;

	showOrHide([result], []);
}
