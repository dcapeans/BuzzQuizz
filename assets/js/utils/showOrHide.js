function showOrHide(show, hide) {
    show.forEach(element => {
        element.classList.remove('hidden');
    })
    hide.forEach(element => {
        element.classList.add('hidden');
    })
}
