<template>
<the-header></the-header>
   <router-view></router-view>
  <the-footer></the-footer>
</template>

<script>
// import TheSchedule from "./components/TheSchedule.vue";
// import TheCalendar from "./components/TheCalendar.vue";


export default {
  name: "App",

  components: {
    
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

html {
  /* 10px / 16px = 0.625 = 62.5% */
  font-family: "Roboto", sans-serif;
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

:root {
  --greyfont: #565555;
  --red: #ad3a1d;
  --lighterred: #bf4c21;
  --lightgrey: #e2e2e2;
}

main {
 background-color:  rgb(245, 245, 245);
  padding: 5rem 40rem;
  margin: auto;
  background-image: url(./assets/background_9.png);
  background-size: cover;
  background-position-y: 55%;
  width: 100%;
}

h1, h2, h3, h4 {
  font-family: 'Poppins', sans-serif;
}
a {
  text-decoration: none;
  color:inherit;
   display: inline-block;
}

.button {
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  background-color: var(--red);
  /* border-radius: 20px; */
  color: white;
  padding: 1rem 1.4rem;
  width: fit-content;
  font-weight: 400;
  text-align: center;
  transition: 0.4s ease-in;
  border:none;
  border-radius: 40px;
  background: linear-gradient(90deg, var(--red), rgb(213, 80, 80));
}



.flex {
  display: flex;
}

h1 {
  font-size: 2.8rem;
}


h2 {
  font-size: 2.4rem;
  color: var(--greyfont);
}

h4 {
    font-size:1.8rem
}

p {
  font-size: 1.6rem;
  line-height: 2.3rem;
}

.img-homepage {
  max-width:50%
}

hr {
    margin-top: 0rem;
}
h1 {
  padding-top: 8rem;
  /* border-bottom: 1px solid var(--greyfont) */
}

/* h1 {
  margin-bottom: 5rem;
} */



.background {
  background-color:  rgb(245, 245, 245);
  padding: 0 4rem;
}

/* 
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  z-index: 2;
  cursor: pointer;
} */

</style>
