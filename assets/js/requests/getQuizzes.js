function getQuizzes() {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes')
        .then(res => {
            const data = res.data;
            renderQuizzes(data);
            renderUserQuizzes(data);
        })
        .catch(err => {
            alert('Erro');
            console.log(err);
        });
}

getQuizzes();
