function getOneQuiz(element) {
    const id = element.dataset.id;
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/${id}`)
        .then(res => {
            const data = res.data;
            renderOneQuiz(data);
        })
        .catch(err => {
            alert('Erro');
            console.log(err);
        })
}
