function postNewQuizz() {
    const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes", quizzObject)
    promise.then(response => {
        //salvar ID da resposta no localStorage
        const serializedID = JSON.stringify(response.data.id)
        localStorage.setItem("id", serializedID)
        resetQuizzObject()
    })
    promise.catch(error => {
        alert("Erro")
        console.log(error)
    })
}

function resetQuizzObject() {
    quizzObject.title = ""
    quizzObject.image = ""
    quizzObject.questions = []
    quizzObject.levels = []
}