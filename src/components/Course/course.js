
export function loadCourses(courses) {
    const table = document.getElementById('courses-table');

    for (let course of courses) {
        var tr = table.insertRow(-1);
        
        var td = tr.insertCell();
        td.innerHTML = table.getElementsByTagName("tr").length;

        td = tr.insertCell();
        td.innerHTML = course

        td = tr.insertCell();
        td.innerHTML = 'waiting';

        td = tr.insertCell();
        td.innerHTML = 'waiting';
    }
}