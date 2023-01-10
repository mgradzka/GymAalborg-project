<template>
  <section class="flex">
    <div class="flex points-container">
      <strong-item
        v-for="(point, index) in strongPoints"
        :key="index"
        :h3="point.h3"
        :p="point.p"
      ></strong-item>
    </div>
    <div class="buttons flex">
      <router-link to="/training"
        ><a href="" class="button">See trainings</a></router-link
      >
      <router-link to="/activities"
        ><a href="" class="button">See schedule</a></router-link
      >
    </div>
  </section>
</template>

<script>
import StrongItem from "./StrongItem.vue";
export default {
  components: {
    StrongItem,
  },
  data() {
    return {
      strongPoints: [
        {
          h3: "Experienced coaches",
          p: "Welcome to GymAalborg website. In our association, we offer a wide range of teams within all ages and gymnastics disciplines",
        },
        {
          h3: "All level groups",
          p: "Welcome to GymAalborg website. In our association, we offer a wide range of teams within all ages and gymnastics disciplines",
        },
        {
          h3: "Variety of trainings",
          p: "Welcome to GymAalborg website. In our association, we offer a wide range of teams within all ages and gymnastics disciplines",
        },
      ],
    };
  },
};
</script>
<style scoped>
section {
  background-color: white;
  padding: 5rem 4rem;
  flex-direction: column;
  align-items: center;
  /* margin:0 0 3rem; */
  gap: 3rem;
}

.points-container {
  flex-direction: row;
}

.buttons {
  gap: 5rem;
}
</style>
