<template>
  <app-header
      :title="this.title"
  >

  </app-header>

  <main>
    <router-view>

    </router-view>
  </main>


</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
// import { useDark } from '@vueuse/core';
import {RouterView} from "vue-router";
// const isDark = useDark();

export default {
    name: 'App',
    components: {AppHeader, RouterView},
    data() {
        return {
            title: 'Andijevo Punoletstvo'
        }
    }
}
</script>

<style>
:root {
    --light-color: #edf2f1;
    --dark-color: #2e2a22ff;
}

body {
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
    align-items: center;
    justify-content: center;
}
</style>