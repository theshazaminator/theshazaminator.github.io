import { send } from "../notification";
import { store, upload } from "../store";
import { addingEvent } from "./calendar.js";

function openModal($el) {
    $el.classList.add('is-active');
}

function closeModal($el) {
    $el.classList.remove('is-active');
}

function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
        closeModal($modal);
    });
}

// Add a click event on buttons to open a specific modal
(document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', () => {
        openModal($target);
    });
});

// Add a click event on various child elements to close the parent modal
(document.querySelectorAll('.modal-background, .cancel-btn, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
        closeModal($target);
    });
});

// Add a keyboard event to close all modals
document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
        closeAllModals();
    }
});

document.getElementById('add-hw-btn').addEventListener('click', () => {
    const name = document.getElementById('hw-name').value;
    const date = document.getElementById('hw-date').value;
    const time = document.getElementById('hw-time').value;
    const course = document.getElementById('hw-course').value;
    store.homework.push([name, date, time, course]);
    addingEvent(name, date);
    upload();
});

document.getElementById('add-test-btn').addEventListener('click', () => {
    const name = document.getElementById('test-name').value;
    const date = document.getElementById('test-date').value;
    const time = document.getElementById('test-time').value;
    const course = document.getElementById('test-course').value;
    store.tests.push([name, date, time, course]);
    addingEvent(name, date);
    upload()
});

document.getElementById('add-course-btn').addEventListener('click', () => {
    const name = document.getElementById('course-name').value;
    store.courses.push(name);
    upload();
});
