const modalbtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const closebtn = document.querySelector('.close-btn');

modalbtn.addEventListener('click', openModal)
closebtn.addEventListener('click', closeModal);

function openModal() {
    return modal.classList.add('open-modal');
}

function closeModal() {
    return modal.classList.remove('open-modal');
}