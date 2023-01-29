import { getDatabase, ref, set, get, child } from "firebase/database";

import { database } from './app.js';

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

export const load = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'data/haha')).then((snapshot) => {
        if (snapshot.exists()) {
            store = JSON.parse(snapshot.val().rawData);
        }
    }).catch((error) => {
        console.error(error);
    });
}