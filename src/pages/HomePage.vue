<template>
    <span class="page-title">
      {{ lang.title[languageStore.selectedLanguage] }} 🎉
    </span>

  <media-viewer
      :items="this.media"
  >

  </media-viewer>

</template>

<script>
import {mapStores} from "pinia";
import {useLanguageStore} from "@/store";
import MediaViewer from "@/components/MediaViewer.vue";

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
            media: [
                {
                    name: 'Porsche GT3 RS',
                    src: 'https://imgr1.auto-motor-und-sport.de/Porsche-911-GT3-RS-169FullWidth-c8d83bf5-2006007.jpg',
                    thumb: null,
                    type: 'image'
                },
                {
                    name: 'Ferrari 1',
                    src: 'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1920x1080/b8b80954-789c-48ab-9678-07e7352ca679.jpg?v=148',
                    thumb: null,
                    type: 'image'
                },
                {
                    name: 'Ferrari 2',
                    src: 'https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1920x1080/bb2f7021-e295-4148-881b-d5a206629ae5.jpg?v=148',
                    thumb: null,
                    type: 'image'
                },
                {
                    name: 'Sample Video',
                    src: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    thumb: null,
                    type: 'video'
                },
                {
                    name: 'Freestyler',
                    src: '/free.mp4',
                    thumb: null,
                    type: 'video'
                }
            ]
        }
    },
    computed: {
        languageStore: mapStores(useLanguageStore).languageStore
    }
}

</script>

<style scoped>

</style>