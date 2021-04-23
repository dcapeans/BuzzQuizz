let quizzIdArray = []

function postNewQuizz() {
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes", quizzObject)
    promise.then(response => {
        //salvar array ID da resposta no localStorage
        const ids = localStorage.getItem('id');
        if(ids !== null) quizzIdArray = JSON.parse(ids);
        quizzIdArray.push(response.data.id)
        const serializedIDArray = JSON.stringify(quizzIdArray)
        localStorage.setItem("id", serializedIDArray)
    })
    promise.catch(error => {
        alert("Erro")
        console.log(error)
    })
}

function resetQuizzObject() {
    quizzObject.title = ""
    quizzObject.image = ""
    quizzObject.questions;
    quizzObject.levels;
}