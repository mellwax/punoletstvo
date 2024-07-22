//import axios from 'axios';
/* eslint-disable */
export const ANDIS_CLUB_BACKEND_URL = 'http://192.168.0.169:3001';

export async function getMedia() {
    const res = await fetch(ANDIS_CLUB_BACKEND_URL + '/media');

    if (!res.ok) {
        return [];
    }

    return await res.json();
}

export function postMedia(files) {
    const promises = [];
    //console.log(files);

    for (const file of files) {
        const fd = new FormData();
        fd.append('file', file.raw);

        const res = fetch(ANDIS_CLUB_BACKEND_URL + '/media', {
            method: 'POST',
            body: fd
        });

        promises.push(res);
    }

    return Promise.all(promises);
}

export async function login(username, password) {
    const res = await fetch(ANDIS_CLUB_BACKEND_URL + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    });

    return await res.json();
}