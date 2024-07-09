import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('languages', {
    state: () => ({
        selectedLanguage: 'en',

    })
});