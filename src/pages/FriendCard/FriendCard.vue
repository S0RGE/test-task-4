<template>
  <div class="friend-card container">
    <div class="friend-card__header" v-if="user">
      <div
        class="header-actions fit row no-wrap justify-between items-center content-start"
      >
        <q-btn class="action-back" icon="fa-solid fa-angle-left" />
        <q-btn class="action-options" icon="fa-solid fa-ellipsis" />
      </div>
      <div class="header-photo fit column no-wrap justify-center items-center">
        <q-avatar rounded size="120px">
          <img :src="userPhoto" :alt="user.name" />
        </q-avatar>
        <div
          class="header-profile column no-wrap justify-center items-center q-mt-sm"
        >
          <div class="profile-name">{{ user.name }}</div>
          <div class="profile-email">{{ user.email }}</div>
          <div class="profile-birthday">{{ userBirthday }}</div>
        </div>
      </div>
    </div>
    <PriorityList />
    <UserStatusList />
    <q-btn-group push class="friend-card__action">
      <q-btn icon="fa-solid fa-house" />
      <q-btn icon="fa-solid fa-user-group" />
      <q-btn icon="fa-solid fa-circle-plus" />
      <q-btn icon="fa-solid fa-heart" />
      <q-btn icon="fa-solid fa-user" />
    </q-btn-group>
  </div>
</template>

<script setup>
// Components
import PriorityList from "components/PriorityList";
import UserStatusList from "src/components/UserStatusList";

// Methods
import { getUserProfile, getUserWishes } from "src/helpers/api";
import { onMounted, ref, computed } from "vue";

const user = ref(null);

onMounted(() => {
  getUserProfile()
    .then((response) => {
      user.value = response.user;
    })
    .catch((error) => {
      console.error(error);
    });

  getUserWishes()
    .then((response) => {
      console.log("wishes: ", response);
    })
    .catch((error) => {
      console.error(error);
    });
});

const userPhoto = computed(() => `data:image/png;base64,${user.value.photo}`);

const userBirthday = computed(() => {
  const birthDay = new Date(user.value.birthday);
  const parsedBirthDay = birthDay.toLocaleDateString();
  return parsedBirthDay;
});
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
