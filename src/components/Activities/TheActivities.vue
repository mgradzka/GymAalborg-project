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
            img: "../../assets/birthday.jpg",
            route: "/activities/birthday",
            h1: "Celebrate birthday",
            p: "Make your child hvae an unforgettable birthday! Throw a party in Aalborg's funniest and most spectacular gymnasium, Gymnastikkens Hus"
        },
        {
            img: "../../assets/gymland1.jpg",
            route: "/activities/gymland",
             h1: "GymLand experience",
            p: "Spend your weekend actively having a memorable time in GymAalborg biggest playground!"
        
        },
        {
            img: "../../assets/playroom1.jpg",
            route: "/activities/playroom",
             h1: "Playroom challenge",
            p: "Are you looking for new challenges and fun entertainment? Try your hand at our playroom - it may be interesting not only for the youngest!"
        
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
