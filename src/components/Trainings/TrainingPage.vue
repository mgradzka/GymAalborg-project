<template>
  <main id="main">
    <div class="background">
      <the-heading>Training & registration</the-heading><br />
      <filter-option></filter-option>
      <the-spinner v-if="!isData"></the-spinner>
    
      <!-- <label for="selected">fridays</label>
      <input v-model="selected" type="checkbox" /> -->
      <training-card
        v-for="training in trainings"
        :key="training.acf.name"
        :name="training.acf.name"
        :price="training.acf.price"
        :age="training.acf.age"
        :day="training.acf.day"
        :hour="training.acf.hours"
        :duration="training.acf.duration"
        :place="training.acf.place"
        :trainer="training.acf.trainer"
        :description="training.acf.description"
        :img="training.acf.image.url"
      ></training-card>
    </div>
  </main>
</template>

<script>
import TrainingCard from "./TrainingCard.vue";
import FilterOption from "./FilterOption.vue";
import TheSpinner from "../TheSpinner.vue";

export default {
  components: {
    TrainingCard,
    FilterOption,
    TheSpinner
  },
  data() {
    return {
      trainings: [],
      isData: false
    };
  },
  computed: {
    // filteredTrainings() {
    //   let tempTrainings = this.trainings;
    //   let result = Object.keys(tempTrainings)
    //   // tempTrainings = Object.values(tempTrainings)
    //   result.filter((item) => {
    //     (item.acf.day === "Tuesdays")
    //   })
    //     console.log((result));
    //   return result

    //   }
    
     },
    

  
  created() {
    fetch("https://www.martynagradzka.dk/wp-json/wp/v2/posts?tags=8")
      .then((resp) => resp.json())
      .then((data) => {
        this.isData = true
        this.trainings = data;
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
