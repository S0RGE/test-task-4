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
          <img :src="`data:image/png;base64,${user.photo}`" :alt="user.name" />
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
    
  </div>
</template>

<script>
import { getUserProfile } from "src/helpers/api";

export default {
  name: "FriendCard",
  data() {
    return {
      user: null,
    };
  },
  methods: {
    getImage() {
      const image = new Image();

      image.src = user.photo;
    },
  },
  computed: {
    userBirthday() {
      const birthDay = new Date(this.user.birthday);
      const parsedBirthDay = birthDay.toLocaleDateString();
      return parsedBirthDay;
    },
  },
  async mounted() {
    const response = await getUserProfile();
    if (!response.error) {
      this.user = response.user;
    }
  },
};
</script>

<style lang="scss" scoped>
@use "./style.scss";
</style>
