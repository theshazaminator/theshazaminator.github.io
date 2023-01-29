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