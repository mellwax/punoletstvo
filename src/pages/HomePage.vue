<template>
    <span class="page-title">
      {{ lang.title[languageStore.selectedLanguage] }} 🎉
    </span>

  <media-viewer
      :items="this.media"
      v-if="media.length > 0"
  >
  </media-viewer>

  <div
      v-else
  >
    No photos/videos have been uploaded yet.
  </div>

</template>

<script>
import {mapStores} from "pinia";
import {useLanguageStore} from "@/store";
import MediaViewer from "@/components/MediaViewer.vue";
import {getMedia} from "@/services/PunoletstvoService";

export default {
    name: 'HomePage',
    components: {
        MediaViewer
    },
    data() {
        return {
            lang: {
                title: {
                    en: 'Relive our unforgettable party!',
                    de: 'Erlebe unsere unvergessliche Party noch einmal!',
                    rs: 'Doživi još jednom našu nezaboravnu žurku!'
                }
            },
            media: []
        }
    },
    computed: {
        languageStore: mapStores(useLanguageStore).languageStore,

    },
    beforeCreate() {
        getMedia().then(media => this.media = media);
    }
}

</script>

<style scoped>

</style>