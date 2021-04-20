function selectAnswer(element) {
    const parent = element.parentElement;
    parent.classList.add('selected');
    element.classList.add('selected');

    parent.childNodes.forEach(child => {
        if(`${child.__proto__}` === "[object HTMLElement]") {
            child.removeAttribute('onclick');
        }
    });
}
