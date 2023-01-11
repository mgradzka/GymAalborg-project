<template>
  <nav class="flex">
    <a href="/home" class="test"
      ><img src="@/assets/full-logo.png" class="star" alt=""
    /></a>

    <ul class="flex">
      <li class="uppercase flex">
        <router-link
          to="/home"
          class="link"
          :class="{ active: $route.name === 'home' }"
          >Home</router-link
        >
        <!-- <div class="dot flex" :class="{'active': $route.name === 'home'}"></div> -->
      </li>
      <li class="uppercase flex">
        <router-link to="/training" class="link">Trainings</router-link>
        <!-- <div class="dot flex"></div> -->
      </li>
      <li class="uppercase flex">
        <router-link to="/activities" class="link" :class="{'active': $route.name === 'playroom' ||  $route.name === 'birthday' ||  $route.name === 'gymland'  || $route.name === 'birthday1' }">Activities</router-link>
        <!-- <div class="dot"></div> -->
      </li>
      <li class="uppercase flex">
        <router-link to="/about" class="link">About us</router-link>
        <!-- <div class="dot flex"></div> -->
      </li>
      <li class="uppercase flex">
        <router-link to="/clubwear" class="link">Club wear</router-link>
        <!-- <div class="dot flex"></div> -->
      </li>
    </ul>
    <router-link to="/training" class="button">Book your training here</router-link>
  </nav>
</template>

<script>
export default {
  computed: {},
};
</script>

<style scoped>
.star {
  position: absolute;
  top: 2rem;
  left: 5rem;
  min-width: 15rem;
}

nav {
  position: relative;
  padding: 2rem;
  position: fixed;
  background-color:  rgb(245, 245, 245);
  width: 100%;
  /* text-align: center; */
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 0 2px 10px 0 rgba(63, 63, 63, 0.2); */
}

a {
  border-bottom: 2px solid transparent;
  font-family: "Poppins", sans-serif;
}
.active {
  transition: all ease-in-out 250ms;
  border-bottom: 2px solid var(--red);
}

ul {
  list-style: none;
  gap: 4rem;
}
a {
  font-size: 1.6rem;
  color: black;
}

a.button {
  background-color: #404040;
  color: rgb(235, 235, 235);
  font-weight: 600;
  font-size: 1.6rem;
}

.button {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  /* box-shadow: 0 0 1px rgba(197, 4, 4, 0); */
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
}
.button:hover,
.button:focus,
.button:active {
  box-shadow: 0 0 14px rgb(150, 150, 150);
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
}

img {
  max-width: 10rem;
}

li {
  color: var(--greyfont);
  font-weight: 600;
  flex-direction: column-reverse;
  align-content: center;
  gap: 0.6rem;
}

/* nav a.active {
  border-bottom: 2px solid red;
} */
</style>
