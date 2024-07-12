import { defineStore } from 'pinia';

export const useLanguageStore = defineStore('language', {
    state: () => ({
        selectedLanguage: 'en',
        availableLanguages: ['en', 'de', 'rs'],
    }),
    actions: {
        changeLanguage(lang) {
            if (!this.availableLanguages.includes(lang)) return;

            this.selectedLanguage = lang;
            document.querySelector('html').setAttribute('lang', lang);
            localStorage.setItem('lang', lang);
        },
        loadLanguage() {
            let lang = localStorage.getItem('lang');
            if (!lang || !this.availableLanguages.includes(lang)) lang = 'en';

            this.selectedLanguage = lang;
            localStorage.setItem('lang', lang);
        }
    }
});

export const useUploadStore = defineStore('upload', {
    state: () => ({
        files: [],
        contId: 0
    }),
    actions: {
        updateFiles(file) {
            if (!file) return;

            this.files.push({
                id: this.contId++,
                name: file.name ?? `no-name-${this.id}`,
                src: URL.createObjectURL(file),
            });
        },
        remove(id) {
            for (let i = 0; i < this.files.length; i++) {
                if (this.files[i].id === id) {
                    this.files.splice(i, 1);
                    return;
                }
            }
        }
    }
});