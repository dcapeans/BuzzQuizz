const quizzObject = {
    title: "",
    image: "",
    questions: [],
    levels = []
}

let numberQuestions;
let numberLevels;

function InitButtonListener(){
    const basicButton = document.querySelector("[name=basic-info-button]")
}

function submitBasicInfo() {
    const form = document.querySelector("[name=basic-info]")
    const valuesArr = form.querySelectorAll("input")
    console.log(valuesArr)
    
    quizzObject.title = valuesArr[0].value
    quizzObject.image = valuesArr[1].value
    numberQuestions = valuesArr[2].value
    numberLevels = valuesArr[3].value

    validateBasicInfo()
}

function getValue(arr){
    arr.forEach(validateQuestion)
}

function validateBasicInfo() {

    if(quizzObject.title.length < 20 && quizzObject.title.length > 65){
        alert("Preencha o título corretamente")
    } else if(quizzObject.image) {

    }

    
}

function createValueObject() {
    getValue(valuesArr)
}