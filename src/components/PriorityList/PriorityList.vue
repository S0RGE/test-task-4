<template>
  <div>
    <ListWithNavigation :links="priorities" />
  </div>
</template>

<script setup>
import ListWithNavigation from "components/ListWithNavigation";

const priorities = [
  {
    icon: "fa-solid fa-heart",
    name: "Мои желания",
    description: "5",
    anchor: "wishes",
  },
  {
    icon: "",
    name: "Мои бронирования",
    description: "5",
    anchor: "reservation",
  },
];
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
