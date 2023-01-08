<template>
  <main>
    <div class="background">
      <section>
        <the-heading>We are GymAalborg</the-heading>
        <!-- <h2>Gym Aalborg</h2> -->
        <p>
          Who we are? We are gymnasts in Aalborg. We love sport, being active
          and having fun.
        </p>
        <video controls autoplay>
          <source src="../../assets/gymnastic.mp4" type="video/mp4" />
        </video>
        <!-- <iframe autoplay
          width="560" 
          height="315"
          src="https://www.youtube.com/embed/wxhG_683ALE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe> -->
      </section>

      <!-- <img
        src="@/assets/schedule.jpg"
        class="schedule"
        alt="there will be img"
      /> -->
      <!-- <event-calendar></event-calendar> -->
      <training-teaser></training-teaser>

      <the-volunteers></the-volunteers>
    </div>
  </main>
</template>

<script>
import TrainingTeaser from "./TrainingTeaser";
import TheVolunteers from "../TheVolunteers";
// import EventCalendar from "../Calendar/EventCalendar";
export default {
  components: {
    TrainingTeaser,
    TheVolunteers,
    // EventCalendar,
  },
};
</script>

<style scoped>
.schedule {
  padding-top: 3rem;
  max-width: 100%;
}

video {
  width: 100%;
}

article,
section {
  margin-bottom: 5rem;
}
h2 {
  color: var(--greyfont);
}

section * {
  padding-bottom: 2rem;
}
</style>
