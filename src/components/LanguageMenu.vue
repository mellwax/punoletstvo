<template>
  <select>
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