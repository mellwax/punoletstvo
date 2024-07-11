<template>
  <select id="lang-select" @change="changeLang($event.target.value)">
    <option value="en">
      🇬🇧
    </option>
    <option value="rs">
      🇷🇸
    </option>
    <option value="de">
      🇩🇪
    </option>
  </select>
</template>

<script>
import {mapStores} from "pinia";
import {useLanguageStore} from "@/store";

export default {
    name: 'LanguageMenu',
    computed: {
        languageStore: mapStores(useLanguageStore).languageStore,
    },
    methods: {
        changeLang(lang) {
          this.languageStore.changeLanguage(lang);
        }
    },
    mounted() {
        document.getElementById('lang-select').value = this.languageStore.selectedLanguage;
    }
}
</script>

<style scoped>
select {
    border: none;
    height: 3rem;
    font-size: 150%;
    background-color: inherit;
}

@media (max-width: 700px) {
    select {
        height: 2rem;
        font-size: 100%;
    }
}

select:active {
    border: none;
}

</style>