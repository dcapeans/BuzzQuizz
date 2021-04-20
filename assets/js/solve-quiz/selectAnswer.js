function selectAnswer(element) {
    const parent = element.parentElement;
    const children = [...parent.children];
    parent.classList.add('selected');
    element.classList.add('selected');

    children.forEach(child => {
        child.removeAttribute('onclick');
    });
}
