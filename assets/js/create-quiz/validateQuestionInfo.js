const questionsArr = []

function InitQuestionButtonListener() {
    const form = document.querySelector(".questions-info-form")


    form.addEventListener("submit", function (event) {
        event.preventDefault()
        if (validateQuestionAll()) {
            submitQuestionInfo()
            renderCreateLevels()
            ShowCreateLevels()
        } else {
            alert("Preencha os campos corretamente")
        }
        return false
    })
}

function submitQuestionInfo() {
    const form = document.querySelector(".questions-info-form")
    const questions = form.querySelectorAll(".question-form")
    

    questions.forEach(question => {
        const answers = []
        const firstIncorrectAnswer = question.querySelector("[name=question-wrong-1]")
        const secondIncorrectAnswer = question.querySelector("[name=question-wrong-2]")
        const thirdIncorrectAnswer = question.querySelector("[name=question-wrong-3]")
        const correctAnswerObj = {
            text: question.querySelector("[name=question-right]").value,
            image: question.querySelector("[name=question-right-img]").value,
            isCorrectAnswer: true
        }
        const firstIncorrectAnswerObj = {
            text: firstIncorrectAnswer.value,
            image: question.querySelector("[name=question-wrong-1-img]").value,
            isCorrectAnswer: false
        }
        answers.push(correctAnswerObj)
        answers.push(firstIncorrectAnswerObj)

        if(secondIncorrectAnswer.value !== ""){
            const secondIncorrectAnswerObj = {
                text: secondIncorrectAnswer.value,
                image: question.querySelector("[name=question-wrong-2-img]").value,
                isCorrectAnswer: false
            }
            answers.push(secondIncorrectAnswerObj)
        } 
        
        if(thirdIncorrectAnswer.value !== ""){
            const thirdIncorrectAnswerObj = {
                text: thirdIncorrectAnswer.value,
                image: question.querySelector("[name=question-wrong-3-img]").value,
                isCorrectAnswer: false
            }
            answers.push(thirdIncorrectAnswerObj)
        }
        const questionObj = {
            title: question.querySelector("[name=question-title]").value,
            color: question.querySelector("[name=question-color]").value,
            answers: answers
        }
        questionsArr.push(questionObj)
    })
}