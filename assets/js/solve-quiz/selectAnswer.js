function selectAnswer(element) {
    const result = document.querySelector('.result');
	const parent = element.parentElement;
	const children = [...parent.children];
	parent.classList.add('selected');
	element.classList.add('selected');

	children.forEach((child) => {
		child.removeAttribute('onclick');
	});

	const selected = document.querySelectorAll('.selected .selected');
	setTimeout(() => {
        if (selected.length !== currentQuiz.questions.length) {
            parent.parentElement.nextElementSibling.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
        else {
            result.classList.remove('hidden')
            result.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        }
    }, 2000);
}
