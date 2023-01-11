<template>
  <section class="flex">
    <div class="points-container">
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
          p: "Our staff are trainers with years of experience, who have participated in competitions around the world.",
        },
        {
          h3: "All level groups",
          p: "Regardless the age and advancement, you can find classes tailored to your level. It doesn't matter if you are a beginner or a pro!",
        },
        {
          h3: "Variety of trainings",
          p: "At GymAalborg we have a large selection of trainings, so you will definitely find the perfect one for you - no matter what you are interested in.",
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
  /* flex-direction: row; */
  display:grid;
  grid-template-rows: 1fr;
  grid-template-columns:  1fr 1fr 1fr;
}

.buttons {
  gap: 5rem;
}
</style>
