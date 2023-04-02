<template>
  <div class="q-pa-md" style="max-width: 350px" rounded>
    <q-list bordered class="main-list">
      <router-link :to="link.anchor" v-for="link in links" :key="link.id">
        <q-item clickable v-ripple class="main-list__item">
          <q-item-section avatar class="item-icon">
            <q-icon :name="link.icon" class="color-secondary" />
          </q-item-section>
          <q-item-section class="item-name"
            >{{ link.name }}
            <span class="color-secondary">{{
              link.description
            }}</span></q-item-section
          >
          <q-item-section avatar class="item-arrow">
            <q-icon
              name="fa-solid fa-angle-right"
              class="item-arrow color-secondary"
            />
          </q-item-section>
        </q-item>
      </router-link>
    </q-list>
  </div>
</template>

<script setup>
const prop = defineProps({
  links: {
    type: Array,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
