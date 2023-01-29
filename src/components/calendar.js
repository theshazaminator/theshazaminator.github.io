import { store, upload } from '../store';
import { openModal } from './navbar';

let calendar;
document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');

    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        eventClick: function (info) {
            console.log(info.event)
            const data = info.event;
            const $target = document.getElementById('event-modal');
            openModal($target);
            document.getElementById('event-name').textContent = data.title;
            document.getElementById('event-date').textContent = data.startStr;
            document.getElementById('event-save-btn').addEventListener('click', () => {
                if (info.el.style.backgroundColor == 'red') {
                    store.tests[data.id][4] = 'completed';
                } else if (info.el.style.backgroundColor == 'blue') {
                    store.homework[data.id][4] = 'completed';
                }
                info.el.style.backgroundColor = 'grey';
                upload();
            });
        }
    });
    calendar.render();

});

export function addingEvent(course, type) {
    let color = 'blue';
    if (type == 'test') {
        color = 'red'
    }
    if (course[4] === 'completed') {
        color = 'grey';
    }
    console.log(type, color)
    let event = {
        id: course[5],
        title: course[3] + ' - ' + course[0],
        start: course[1],
        backgroundColor: color
    }
    calendar.addEvent(event)
}

export function loadAll() {
    for (hw of store.homework) {
        addingEvent(hw, 'hw');
    }
    for (test of store.tests) {
        addingEvent(test, 'test');
    }
}
