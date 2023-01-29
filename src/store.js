import { getDatabase, ref, set, get, child } from "firebase/database";

import { database } from './app.js';
import { loadAll } from "./components/calendar.js";
import { updateCourses } from "./components/navbar.js";
import { send } from "./notification.js";

export let store = {
    homework: [],
    tests: [],
    courses: [],
};

export const upload = () => {
    const db = getDatabase();
    set(ref(db, 'data/haha'), {
        rawData: JSON.stringify(store)
    });
}

const shouldSendMessage = () => {
    let sent = {
        homework: [],
        tests: []
    };
    const interval = setInterval(function () {
        let msg = "Omnia: Some assignments/tests that are coming up:";
        for (let hw of store.homework) {
            if (hw[4] == 'in-progress' && !sent.homework.includes(hw[5])) {
                const dueDate = new Date(hw[1]);
                if (dueDate - new Date() < 24 * 60 * 60 * 1000) {
                    sent.homework.push(hw[5]);
                    msg += " " + hw[3] + ": " + hw[0] + ". Doing homework will help you improve your score for PHY 183. Your current score is 61.11";
                }
            }
        }
        console.log("###");
        for (let test of store.tests) {
            if (test[4] == 'in-progress' && !sent.homework.includes(test[5])) {
                const dueDate = new Date(hw[1]);
                if (dueDate - new Date() < 24 * 60 * 60 * 1000) {
                    sent.homework.push(test[5]);
                    msg += "- " + test[3] + ": " + test[0] + "\n";
                }
            }
        }
        if (msg != "Omnia: Some assignments/tests that are coming up:\n") {
            // send(msg, "+15172219928");
        }
        console.log(msg);
    }(), 10000); // 5 mins

    clearInterval(interval);
}

export const load = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'data/haha')).then((snapshot) => {
        if (snapshot.exists()) {
            store = JSON.parse(snapshot.val().rawData);
        }
        console.log(store)
        loadAll();
        updateCourses();
        shouldSendMessage();
    }).catch((error) => {
        console.error(error);
    });
}