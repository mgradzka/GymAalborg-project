<template>
  <div>
    <half-circle-spinner
      :animation-duration="1000"
      :size="70"
      color="#ad3a1d"
    />
    <p>Loading</p>
  </div>
</template>

<script>
import { HalfCircleSpinner } from "epic-spinners";
export default {
  components: {
    HalfCircleSpinner,
  },
};
</script>

<style scoped>
div {
    margin: 0 auto
}

p {
    margin-top:2rem;
    font-weight:500;
    text-align: center;
     font-family: 'Poppins', sans-serif;
}
</style>
