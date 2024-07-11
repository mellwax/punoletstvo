<template>
  <div class="outer-container">
    <div class="inner-container">
      <img class="upload-preview" :src="src" alt=""/>
      <button class="file-remove" @click="remove">
        &times;
      </button>
    </div>
    <span>
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
        uploadStore: mapStores(useUploadStore).uploadStore
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
}

.upload-preview {
    max-width: 100px;
}

.file-remove {
    width: 1.5em;
    height: 1.5em;
    padding: 0;
    margin: 0;
    border-radius: 50%;

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
    padding: 0.5rem;
    text-align: center;
}

@media (max-width: 700px) {
    span {
        font-size: 0.75rem;
    }
}

</style>