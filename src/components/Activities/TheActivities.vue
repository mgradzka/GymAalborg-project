<template>
  <main>
    <div class="background">
        <the-heading>Activities at GymAalborg</the-heading>
      <the-carousel
        :slides="slides"
        :interval="3000"
        controls
        indicators
      ></the-carousel>
      <h2>Schedule <font-awesome-icon class="fa-solid" icon="fa-solid fa-calendar-days" /></h2>
      <hr />
    </div>
  </main>
</template>

<script>
import TheCarousel from "./carousel/TheCarousel.vue";
export default {
  components: {
    TheCarousel,
  },
  data() {
    return {
      slides: [
        {
            img: "../../assets/carousel1.png",
            route: "/activities/birthday"
        },
        {
            img: "../../assets/carousel2.png",
            route: "/activities/gymland"
        },
        {
            img: "../../assets/carousel3.png",
            route: "/activities/playroom"
        }
      ],
    };
  },
};
</script>

<style scoped>
h2 {
    color: black;
    margin: 4rem 0 0 0;
}

.fa-solid {
    margin-left: 1rem;
    color: var(--red)
}
</style>
