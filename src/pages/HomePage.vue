<template>
    <span class="page-title">Photos and Videos</span>

    <light-gallery class="gallery">
      <a href="https://imgr1.auto-motor-und-sport.de/Porsche-911-GT3-RS-169FullWidth-c8d83bf5-2006007.jpg"
         class="gallery-item">
        <img src="https://imgr1.auto-motor-und-sport.de/Porsche-911-GT3-RS-169FullWidth-c8d83bf5-2006007.jpg" alt="">
      </a>

      <a href="https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1920x1080/b8b80954-789c-48ab-9678-07e7352ca679.jpg?v=148"
         class="gallery-item">
        <img
            src="https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1920x1080/b8b80954-789c-48ab-9678-07e7352ca679.jpg?v=148"
            alt="">
      </a>

      <a href="https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1920x1080/bb2f7021-e295-4148-881b-d5a206629ae5.jpg?v=148"
         class="gallery-item">
        <img
            src="https://ferrari-view.thron.com/api/xcontents/resources/delivery/getThumbnail/ferrari/1920x1080/bb2f7021-e295-4148-881b-d5a206629ae5.jpg?v=148"
            alt="">
      </a>

    </light-gallery>

</template>

<script>
import LightGallery from 'lightgallery/vue';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default {
    name: 'HomePage',
    components: {
        LightGallery
    },
    data() {
        return {
            plugins: [lgThumbnail, lgZoom]
        }
    }
}

</script>

<style scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";

h1 {
    margin-bottom: 3rem;
}

.gallery {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 50px;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
}

.gallery-item {
    max-width: 300px;
}

.gallery-item img {
    max-width: 100%;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
}

.gallery-item img:hover {
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
}

</style>