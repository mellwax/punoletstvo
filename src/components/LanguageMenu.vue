<template>
  <select>
    <option>
      🇬🇧
    </option>
    <option>
      🇩🇪
    </option>
    <option>
      🇷🇸
    </option>
  </select>
</template>

<script>
export default {
    name: 'LanguageMenu',
}
</script>

<style scoped>
select {
    border: none;
    height: 3rem;
    font-size: 150%;
    background-color: inherit;
}

select:active {
    border: none;
}

option {
    line-height: 100%;
}
</style>