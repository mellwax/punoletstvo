<template>
  <div class="outer-container">
    <div class="inner-container">
      <img class="upload-preview" :src="src" alt=""/>
      <button class="file-remove" @click="remove">
        &times;
      </button>
    </div>
    <span v-if="false">
        {{ name }}
      </span>
  </div>
</template>

<script>
import {mapStores} from "pinia";
import {useUploadStore} from "@/store";

export default {
    props: {
        id: Number,
        name: String,
        src: String,
    },
    methods: {
        remove() {
          this.uploadStore.remove(this.id);
        }
    },
    computed: {
        uploadStore: mapStores(useUploadStore).uploadStore,
    }
}
</script>

<style scoped>

.outer-container {
    display: grid;
    justify-items: center;
}

.inner-container {
    max-width: 100px;
    position: relative;
    margin: 0.2em 0.5em;
}

.upload-preview {
    max-width: 100px;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
}

.file-remove {
    width: 1.5em;
    height: 1.5em;
    padding: 0;
    margin: 0;
    border-radius: 50%;
    font-size: 1rem;

    position: absolute;
    top: -0.75em;
    right: -0.75em;

    display: flex;
    align-items: center;
    justify-content: center;
}

.dark .file-remove {
    background-color: var(--light-color);
    color: var(--dark-color);
}

span {
    text-align: center;
    font-size: 1rem;
    padding: 0.2rem;
}

@media (max-width: 700px) {
    span {
        font-size: 0.7rem;
    }
}

</style>