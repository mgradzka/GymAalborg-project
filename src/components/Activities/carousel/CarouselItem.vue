<template>
  <transition :name="transitionEffect">
    <div
      class="carousel-item"
      v-show="currentSlide === index"
      @mouseenter="$emit('mouseenter')"
      @mouseout="$emit('mouseout')"
    >
      <router-link :to="slide.route"><div class="container"><div class="text-container"><h2>{{ slide.h1}} </h2> <p>{{ slide.p}}</p></div><img :src="slide.img" /></div></router-link>
      
    </div>
  </transition>
</template>

<script>
export default {
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
};
</script>

<style scoped>
.carousel-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 1s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}

img {
    width:100%;
}

.container {
  position: relative;
  text-align: left;
}

h2{
 
  color: rgb(61, 61, 61);
  font-size:2.6rem;
  font-weight: 700;
}

.text-container {
    position: absolute;
  bottom: 0px;
  left: 0px;
  width:100%;
  display: flex;
  flex-direction: column;
  padding:6rem 10rem 6rem 6rem;
  background-color:rgba(252, 252, 252, 0.626)
}
</style>
