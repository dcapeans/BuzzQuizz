function getOneQuiz(element, fromHome = true, thisId = null) {
    const id = thisId !== null ? thisId : element.dataset.id;
    axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/${id}`)
        .then(res => {
            const data = res.data;
            renderOneQuiz(data, fromHome);
        })
        .catch(err => {
            alert('Erro');
            console.log(err);
        })
}
