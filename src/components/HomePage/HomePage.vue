<template>
  <main>
    <div class="background">
      <section>
        <the-heading>Welcome to GymAalborg</the-heading>
        <!-- <h2>Gym Aalborg</h2> -->
        <training-teaser></training-teaser>
        <h2>Weekly schedule</h2>
<weekly-calendar></weekly-calendar>
      </section>

      <!-- <img
        src="@/assets/schedule.jpg"
        class="schedule"
        alt="there will be img"
      /> -->
      <!-- <event-calendar></event-calendar> -->
      
      <p>
        We are gymnasts in Aalborg. We love sport, being active and
        having fun.
      </p>
      
        <iframe autoplay
          width="560" 
          height="315"
          src="https://www.youtube.com/embed/wxhG_683ALE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      <!-- <video controls autoplay>
        <source src="../../assets/gymnastic.mp4" type="video/mp4" />
      </video> -->
      <the-volunteers>
        <template #heading>Join our team!</template>
        <template #para
          >Join our team and become a new member of our family at Gym Aalborg!
          we are looking for people who are open and not afraid of challenges,
          who will want to develop this place with us.<br /><br />Are you
          gymnastic trainer? <br />Do you want to become a gymnastic trainer?<br />
          Or do you want to volunteer and have fun with us?<br /><br />
          If you answered yes to at least one of these questions, leave us a
          message! We will contact you for sure and talk about the details of
          possible cooperation.</template
        >
        >
      </the-volunteers>
    </div>
  </main>
</template>

<script>
import TrainingTeaser from "./TrainingTeaser";
import TheVolunteers from "../TheVolunteers";
import WeeklyCalendar from "../Calendar/WeeklyCalendar";
export default {
  components: {
    TrainingTeaser,
    TheVolunteers,
    WeeklyCalendar
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

p{
  text-align: center;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  margin-bottom:2rem;
  font-weight: 400;
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

iframe {
  width: 100%;
  height:50rem
}
</style>
