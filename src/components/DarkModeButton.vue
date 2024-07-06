<template>
  <button @click="toggleMode">
    Switch
  </button>
</template>

<script>
export default {
    name: 'DarkModeButton',
    data() {
        return {
            useDarkMode: false
        }
    },
    mounted() {
        this.useDarkMode = JSON.parse(localStorage.getItem('use-dark-mode'))
        if (typeof this.useDarkMode !== "boolean") this.useDarkMode = false;

        this.setMode();
    },
    methods: {
        setMode() {
            const body = document.querySelector('body');

            if (this.useDarkMode === true) {
                if (!body.classList.contains('dark')) {
                    body.classList.add('dark');
                }
            } else {
                if (body.classList.contains('dark')) {
                    body.classList.remove('dark');
                }
            }

            localStorage.setItem('use-dark-mode', JSON.stringify(this.useDarkMode));
        },
        toggleMode() {
            this.useDarkMode = !this.useDarkMode;
            this.setMode();
        }
    }
}
</script>