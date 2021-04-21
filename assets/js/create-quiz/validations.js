function validateAll() {
    let isValid = false
    if (validateText() &&
        validateUrl() &&
        validateColor() &&
        validateAnswer() &&
        checkMinimumFilled()) { 
            isValid = true
    }
    return isValid
}

function validateText() {
    const inputs = document.querySelectorAll("[data-validate=validateText]")
    let isValid = true;
    inputs.forEach(input => {
        if (input.value.length < 20) {
            isValid = false;
        }
    })
    return isValid
}

function validateColor() {
    const colorInputs = document.querySelectorAll("[data-validate=validateColor]")
    let isValid = false;
    const pattern = /#+([a-fA-F0-9]{6})/
    colorInputs.forEach(input => {

        if (input.value.match(pattern)) {
            isValid = true
        }
    })
    return isValid
}

function validateAnswer() {
    const answers = document.querySelectorAll("[data-validate=validateAnswer]")
    let isValid = false
    answers.forEach(answer => {
        if (answer.value !== "") {
            isValid = true
        }
    })
    return isValid
}

function validateUrl() {
    const urls = document.querySelectorAll("[data-validate=validateUrl]")
    let isValid = false
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator

    urls.forEach(url => {
        if (pattern.test(url.value)) {
            isValid = true
        }
    })
    return isValid
}

function checkMinimumFilled() {
    const requiredArr = document.querySelectorAll("[data-required=required]")
    let isValid = false;
    requiredArr.forEach(element => {
        if (element.value !== "") {
            isValid = true
        }
    })
    return isValid
}

function validateScore() {
    
}