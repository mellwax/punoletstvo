<template>

  <div id="dark-mode-button" @click="toggleMode">
    <img :src="display" alt="toggle" />
  </div>

</template>

<script>

export default {
    name: 'DarkModeButton',
    data() {
        return {
            useDarkMode: false,
            sun: '/sun.svg',
            moon: '/moon.svg',
            display: this.moon
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
                this.display = this.sun;
            } else {
                if (body.classList.contains('dark')) {
                    body.classList.remove('dark');
                }
                this.display = this.moon;
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

<style scoped>
#dark-mode-button {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    background-color: inherit;
}

button {
    width: 5em;
}

#dark-mode-button:active {
    transform: scale(0.85);
}

#dark-mode-button img {
    width: 100%;
}

@media (max-width: 700px) {
    #dark-mode-button {
        width: 1.5rem;
        height: 1.5rem;
    }
}
</style>