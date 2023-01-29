document.addEventListener('DOMContentLoaded', function () {
    let calendarEl = document.getElementById('calendar');

    let calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
    let events = [
        {
            id: 'a',
            title: 'my event',
            start: '2023-01-28'
        }
    ]
    calendar.addEvent(events[0])
});