<template>
  <span class="page-title">Share your memories with us! 🥳</span>

  <form class="upload-form" id="upload-form" @submit.prevent="upload">
    <input type="file" id="file-upload" accept="image/*, video/*" multiple style="display: none" @change="updateFiles">

    <div class="upload-container" @click="openUpload" v-if="uploadStore.files.length === 0">
      <div class="upload-container-element">
        <svg fill="#000000" width="20%" height="20%" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M19,13a1,1,0,0,0-1,1v.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.7L9.41,11.12a2.85,2.85,0,0,0-3.93,0L4,12.6V7A1,1,0,0,1,5,6h7a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V14A1,1,0,0,0,19,13ZM5,20a1,1,0,0,1-1-1V15.43l2.9-2.9a.79.79,0,0,1,1.09,0l3.17,3.17,0,0L15.46,20Zm13-1a.89.89,0,0,1-.18.53L13.31,15l.7-.7a.77.77,0,0,1,1.1,0L18,17.21ZM22.71,4.29l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L18,4.41V10a1,1,0,0,0,2,0V4.41l1.29,1.3a1,1,0,0,0,1.42,0A1,1,0,0,0,22.71,4.29Z"/>
        </svg>
      </div>

      <div class="upload-container-element">
      <span class="upload-text">
        Click here to upload your photos and videos!
      </span>
      </div>

    </div>

    <div class="upload-container display-container" v-if="uploadStore.files.length > 0">

      <div class="image-display">
        <upload-preview-item
            v-for="file in uploadStore.files" :key="file.id"
            :id="file.id"
            :name="file.name"
            :src="file.src"
        >
        </upload-preview-item>

      </div>

      <button id="add-files-btn" @click="openUpload">
        Add photos/videos
      </button>
    </div>

    <button type="submit" id="upload-button">
      Upload
    </button>

  </form>
</template>

<script>
import UploadPreviewItem from "@/components/UploadPreviewItem.vue";
import {mapStores} from "pinia";
import {useUploadStore} from "@/store";

export default {
    name: 'UploadPage',
    components: {UploadPreviewItem},
    data() {
        return {
            status: 'selecting',
        }
    },
    methods: {
        openUpload() {
            document.getElementById('file-upload').click();
        },
        upload() {
            const upload = document.getElementById('file-upload');
            console.log(upload.files);
        },
        updateFiles() {
            if (!document) return;

            const uploadEl = document.getElementById('file-upload');
            if (uploadEl === null) return;

            const uploadFiles = uploadEl.files;
            if (!uploadFiles) return;

            for (const file of uploadFiles) {
                this.uploadStore.updateFiles(file);
            }

            console.log(this.uploadStore.files);
        },
    },
    computed: {
        uploadStore: mapStores(useUploadStore).uploadStore
    }
}
</script>

<style>
form {
    width: 35rem;
}

@media (max-width: 700px) {
    form {
        width: 100%;
    }
}

.upload-container {
    border: 2px dashed var(--dark-color);
    border-radius: 15px;
    min-height: 22rem;
    margin: 2rem 0;
    transition: border-color 0.3s;
    cursor: pointer;
    padding: 2rem;
}

.dark .upload-container {
    border-color: var(--light-color);
}

@media (max-width: 700px) {
    .upload-container {
        margin: 1rem 0;
    }
}

.upload-container-element {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100%;
}

.upload-container-element:first-child {
    margin-top: 7rem;
}

.upload-container svg {
    fill: var(--dark-color);
    transition: all 0.3s;
}

.dark .upload-container svg {
    fill: var(--light-color);
}

.display-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    cursor: default;
}

.image-display {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.upload-text {
    text-align: center;
    padding: 2rem;
}

#upload-button {
    font-size: 1rem;
    width: 100%;
    height: 2.5rem;
}

#add-files-btn {
    font-size: 1rem;
    height: 2.5rem;
    width: 12rem;
    margin-top: 1.5rem;
}

</style>