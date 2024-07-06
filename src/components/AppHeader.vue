<template>
  <header>
    <router-link to="/">
      <span class="header-title">{{ title }}</span>
    </router-link>

    <nav>
      <router-link to="/upload" class="nav-elem">
        <span >
          Upload
        </span>
      </router-link>
      <dark-mode-button class="nav-elem">

      </dark-mode-button>
    </nav>
  </header>
</template>

<script>
import DarkModeButton from "@/components/DarkModeButton.vue";

export default {
    name: 'AppHeader',
    components: {DarkModeButton},
    props: {
        title: String,
    }
}
</script>

<style>
header {
    /*border: 1px solid red;*/
    margin: 1rem 1rem 2rem;
    padding: 1em;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

header a {
    text-decoration: none;
    color: inherit;
}

.header-title {
    font-family: "Noto Serif Display", serif;
    font-weight: 450;
    text-decoration: none;
    font-size: 2rem;
    padding: 0 0.5em;
    margin: 0;
    letter-spacing: -2px;
    border-bottom: 2px solid var(--dark-color);
    transition: border-bottom-color 0.3s;
}

.dark .header-title {
    border-bottom: 2px solid var(--light-color);
}

.nav-elem {
    font-size: 2rem;
    margin: 0 0.5em;
}

.nav-elem:hover {
    border-bottom: 2px solid var(--dark-color);
}

.dark .nav-elem:hover {
    border-bottom: 2px solid var(--light-color);
}

@media(max-width: 700px) {
    header {
        height: 2rem;
        margin: 0.5rem 0.5rem 1rem;
        padding: 0.5em;
    }

    .header-title {
        font-size: 1rem;
        letter-spacing: -1px;
        border-bottom: 1px solid var(--dark-color);
    }

    .dark .header-title {
        border-bottom: 1px solid var(--light-color);
    }

    .nav-elem {
        font-size: 1rem;
    }

    .nav-elem:hover {
        border-bottom: 1px solid var(--dark-color);
    }

    .dark .nav-elem:hover {
        border-bottom: 1px solid var(--light-color);
    }
}

</style>