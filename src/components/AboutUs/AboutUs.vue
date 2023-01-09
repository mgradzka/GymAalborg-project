<template>
  <main>
    <div class="background">
      <the-heading>Get to know Gym Aalborg!</the-heading>
      <h2>Our board of directors</h2>
      <the-spinner v-if="!isData"></the-spinner>
      <section class="trainers">
        <single-trainer
          v-for="trainer in data"
          :key="trainer.acf.name"
          :name="trainer.acf.name"
          :title="trainer.acf.title"
          :img="trainer.acf.image.url"
          :mail="trainer.acf.email"
        ></single-trainer>
      </section>
      <the-volunteers>
        <template #heading>Become a member of our family</template>
        <template #para
          >Join our team and become a new member of our family at Gym Aalborg!
          We are looking for people who are open and not afraid of challenges,
          who will want to develop this place with us.<br /><br />Are you
          gymnastic trainer? <br />Do you want to become a gymnastic trainer?<br />
          Or do you want to volunteer and have fun with us?<br /><br />
          If you answered yes to at least one of these questions, leave us a
          message! We will contact you for sure and talk about the details of
          possible cooperation.</template
        >
        >
      </the-volunteers>
      <the-gallery></the-gallery>
    </div>
  </main>
</template>

<script>
import SingleTrainer from "./SingleTrainer.vue";
import TheVolunteers from "../TheVolunteers.vue";
import TheGallery from "./TheGallery.vue";
import TheSpinner from "../TheSpinner.vue";
export default {
  components: {
    SingleTrainer,
    TheVolunteers,
    TheGallery,
    TheSpinner,
  },
  provide() {
    return {
      trainers: this.trainers,
    };
  },
  data() {
    return {
      isData: false,
      data: [],
    };
  },
  created() {
    fetch("https://www.martynagradzka.dk/wp-json/wp/v2/posts?tags=7")
      .then((resp) => resp.json())
      .then((data) => {
        this.isData = true;
        this.data = data;

        // console.log(data);
        //   this.isData= true
        // console.log(data.url);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
section {
  margin: 3rem 0 3rem;
  display: grid;
  grid-auto-flow: dense;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 1rem;
  row-gap: 5rem;
}

h2 {
  margin-top: 3rem;
}
</style>
