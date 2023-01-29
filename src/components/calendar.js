import { load, store } from '../store';

let calendar;
document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
});

export function addingEvent(course, date) {
    let event = {
        id: 'a',
        title: course,
        start: date
    }
    calendar.addEvent(event)
    console.log(date)
}

export function loadAll() {
    for (hw of store.homework) {
        addingEvent(hw[0], hw[1]);
    }
    for (test of store.tests) {
        addingEvent(test[0], test[1]);
    }
}
