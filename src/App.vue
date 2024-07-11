<template>
  <app-header
      :title="this.title"
  >
  </app-header>

  <main>
    <router-view></router-view>
  </main>

</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import {RouterView} from "vue-router";
import {useLanguageStore} from "@/store";

export default {
    name: 'App',
    components: {AppHeader, RouterView},
    data() {
        return {
            title: 'Andijevo Punoletstvo'
        }
    },
    beforeCreate() {
      const languageStore = useLanguageStore();
      languageStore.loadLanguage();
    }
}
</script>

<style>
:root {
    --serif-font: Palatino, "Palatino Linotype", "URW Palladio L", serif;
    --light-color: #edf2f1;
    --dark-color: #2e2a22ff;
}

body {
    font-family: var(--serif-font);
    color: var(--dark-color);
    background-color: var(--light-color);
    transition: background-color 0.3s, color 0.3s;
}

body.dark {
    color: var(--light-color);
    background-color: var(--dark-color);
}

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 2rem 2rem;
}

@media (max-width: 700px) {
    main {
        margin: 0 1rem 1rem;
    }
}

.page-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
}

@media (max-width: 700px) {
    .page-title {
        font-size: 1.5rem;
        margin: 1rem 0;
    }
}

button {
    font-family: var(--serif-font);
    border: none;
    background-color: var(--dark-color);
    color: var(--light-color);
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
}

.dark button {
    background-color: var(--light-color);
    color: var(--dark-color);
}

button:active {
    transform: scale(0.95);
}

button:hover {
    cursor: pointer;
    background-color: rgba(46, 42, 34, 0.8);
}

.dark button:hover {
    background-color: rgba(237, 242, 241, 0.8);
}
</style>