<template>
  <div class="mv-background"
       v-show="fullscreen"
       @click="toggleFs"
       ref="background"
  >
    <div class="arrow-container" @click.stop="moveLeft">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
      >
        <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z"
              fill="#fff"/>
      </svg>
    </div>

    <div class="mv-fs-media"
         v-if="fullscreen"
         @click.stop

    >
      <img
          :src="items[current].src"
          alt=""
          v-if="items[current].type !== 'video'"
      />
      <video
          v-else
          controls
          preload="auto"
          :src="items[current].src"
          :poster="items[current].thumb"
      >
      </video>
    </div>

    <div class="arrow-container" @click.stop="moveRight">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
      >
        <path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"
              fill="#fff"/>
      </svg>
    </div>

    <div class="media-count" v-if="fullscreen">
      {{ current + 1 }} / {{ items.length }}
    </div>

    <div class="exit-fs" v-if="fullscreen" @click="toggleFs">
      <span>&times;</span>
    </div>
  </div>



  <div class="mv-gallery">
    <div class="mv-media-wrapper"
         v-for="(item, index) in items"
         :key="index"
         @click="toggleFs(); changeCurrent(index);"
    >
      <img
          :src="item.type === 'image' ? item.src : item.thumb"
          alt="no thumb"
      >
    </div>
  </div>
</template>

<script>
export default {
    name: 'MediaViewer',
    props: {
        items: Array
    },
    data() {
        return {
            fullscreen: false,
            current: 0
        }
    },
    methods: {
        async toggleFs() {
            if (!this.fullscreen) {
                this.fullscreen = !this.fullscreen;

                await this.sleep(50);

                this.$refs.background.classList.add('visible');
            } else {
                this.$refs.background.classList.remove('visible');

                await this.sleep(300);

                this.fullscreen = !this.fullscreen;
            }

        },
        changeCurrent(index) {
            this.current = index % this.items.length;
        },
        moveLeft() {
            if (!this.fullscreen) return;

            if (this.current === 0) return this.current = this.items.length - 1;

            this.current = this.current - 1;
        },
        moveRight() {
            if (!this.fullscreen) return;

            this.current = (this.current + 1) % this.items.length;
        },
        addThumbnail() {
            for (const item of this.items) {
                if (item.type === 'video' && !item.thumb) {
                    item.thumb = '/thumb.png';
                }
            }
        },
        sleep(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }
    },
    watch: {
        fullscreen(value) {
            if (value) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }
    },
    mounted() {
        window.addEventListener('keyup', ev => {
            switch (ev.key) {
                case 'ArrowLeft':
                    this.moveLeft();
                    break;
                case 'ArrowRight':
                    this.moveRight();
                    break;
            }
        });
        this.addThumbnail();
    }
}
</script>

<style scoped>
.mv-background {
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.95);

    display: flex;
    justify-content: space-between;
    align-items: center;

    opacity: 0;
    transition: opacity 0.3s;
}

.mv-background.visible {
    opacity: 1;
}

.mv-fs-media {
    max-width: 1000px;
    max-height: 800px;
    z-index: 1001;
    margin: 3rem;
}

@media (max-width: 700px) {
    .mv-fs-media {
        width: 100%;
        margin: 0;
    }
}

.arrow-container {
    z-index: 1001;
    padding: 0.5em;
    height: 2rem;
    width: 2rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: rgba(0, 0, 0, 1);
    transition: all 0.2s;
}

.arrow-container:hover {
    background-color: rgb(30, 30, 30);
}

.arrow-container:active {
    transform: scale(0.85);
}

.arrow-container svg {
    height: 100%;
    width: 100%;
}

@media (max-width: 700px) {
    .arrow-container {
        /*display: none;*/
        height: 1.2em;
        width: 1.2em;
    }

    .arrow-container svg {
        transform: scale(1.5);
    }
}

.media-count {
    color: var(--light-color);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1001;
    padding: 1em;
}

.exit-fs {
    color: var(--light-color);
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1001;
    padding: 0.6em;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
}

.exit-fs span {
    width: 1em;
    height: 1em;
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mv-gallery {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 300px);
    grid-gap: 50px;
    justify-content: center;
    align-items: center;
}

.mv-media-wrapper {
    max-width: 300px;
}

img, video {
    width: 100%;
    height: 100%;
    box-shadow: 0 7px 15px 0 rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    cursor: pointer;
    user-select: none;
}


.mv-fs-media img, .mv-fs-media video {
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.5);

    /* TODO: remove when drag feature is implemented */
    cursor: default;
}

.mv-media-wrapper img:hover, .mv-media-wrapper video:hover {
    box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.5);
    transform: scale(1.1);
}

</style>
