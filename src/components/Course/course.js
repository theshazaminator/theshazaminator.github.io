import { store, upload } from "../../store";
import { closeAllModals, openModal } from "../navbar";

export function loadCourses(courses) {
    const table = document.getElementById('courses-table');

    for (let course of courses) {
        var tr = table.insertRow(-1);

        var td = tr.insertCell();
        td.innerHTML = table.getElementsByTagName("tr").length;

        td = tr.insertCell();
        td.innerHTML = course[0]

        td = tr.insertCell();
        if (course[4] == 0) {
            td.innerHTML = 'waiting';
        }
        else {
            td.innerHTML = Math.round(course[3] / course[4] * 10000) / 100;
        }

        td = tr.insertCell();
        td.innerHTML = '<i class="fa-solid fa-pen is-clickable" id="pen' + course[1] + '"></i>';
        document.getElementById("pen" + course[1]).addEventListener('click', () => {
            const t = document.getElementById('components-table');
            const $target = document.getElementById('course-view-modal');
            openModal($target);
            document.getElementById('course-name-t').innerHTML = course[0];
            // Populate the score table
            for (let score of course[2]) {
                var row = t.insertRow(-1);

                var c = row.insertCell();
                c.innerHTML = score[0];

                c = row.insertCell();
                c.innerHTML = score[1]

                c = row.insertCell();
                if (score[3] == 0) {
                    c.innerHTML = '<input type="number" class="button is-small" id="s' + score[4] + '"/>';
                    c = row.insertCell();
                    c.innerHTML = '<input type="number" class="button is-small" id="ss' + score[4] + '"/>';
                } else {
                    c.innerHTML = '<input type="number" class="button is-small" value="' + score[2] + '" id="s' + score[4] + '"/>';
                    c = row.insertCell();
                    c.innerHTML = '<input type="number" class="button is-small" value="' + score[3] + '" id="ss' + score[4] + '"/>';
                }
            }

            document.getElementById('add-component-btn').addEventListener('click', () => {
                const $$target = document.getElementById('component-modal');
                openModal($$target);
                document.getElementById('component-btn').addEventListener('click', () => {
                    const name = document.getElementById('component-name').value;
                    const quantity = document.getElementById('component-quantity').value;
                    const weight = document.getElementById('component-weight').value;
                    const len = course[2].length;
                    for (let i = 0; i < quantity; ++i) {
                        store.courses[course[1]][2].push([name + " #" + i, Math.round(weight / quantity * 100) / 100, 0, 0, len + i]);
                    }
                    upload();
                    window.location.href = './Course.html';
                });
            });

            document.getElementById('ccc-btn').addEventListener('click', () => {
                let total = 0;
                let expected = 0;
                for (let score of course[2]) {
                    const id = score[4];
                    const a = parseInt(document.getElementById('s' + id).value || 0);
                    const b = parseInt(document.getElementById('ss' + id).value || 0);
                    store.courses[course[1]][2][id][2] = a;
                    store.courses[course[1]][2][id][3] = b;
                    total += a * score[1];
                    expected += b * score[1];
                }
                store.courses[course[1]][3] = total;
                store.courses[course[1]][4] = expected;
                upload();

                window.location.href = './Course.html';
            });

            document.getElementById('cc-btn').addEventListener('click', () => {
                window.location.href = './Course.html';
            });
        });
    }
}