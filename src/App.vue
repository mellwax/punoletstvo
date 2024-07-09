<template>
  <app-header
      :title="this.title"
  >

  </app-header>

  <main>
    <span>{{ this.languages.home.greeting[this.selectedLanguage] }}</span>
    <router-view>

    </router-view>
  </main>


</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import {RouterView} from "vue-router";

export default {
    name: 'App',
    components: {AppHeader, RouterView},
    data() {
        return {
            title: 'Andijevo Punoletstvo',
            selectedLanguage: 'rs',
            languages: {
                home: {
                    greeting: {
                        en: 'Hello',
                        de: 'Servas',
                        rs: 'Ćao'
                    }
                },

            }
        }
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
}

</style>