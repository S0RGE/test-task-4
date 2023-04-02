<template>
  <div>
    <ListWithNavigation :links="statuses" />
  </div>
</template>

<script setup>
import ListWithNavigation from "components/ListWithNavigation";

const statuses = [
  {
    icon: "fa-solid fa-user-group",
    name: "Мои друзья",
    description: "5",
    anchor: "friends",
  },
  {
    icon: "fa-solid fa-lock",
    name: "Статус",
    description: "Открыто для всех",
    anchor: "status",
  },
  {
    icon: "",
    name: "Помощь/поддержка",
    description: "",
    anchor: "tech-help",
  },
];
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
