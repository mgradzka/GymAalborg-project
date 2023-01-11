<template> 

  <article @click="arrowClicked">
    <div class="flex card">
      <div>
        <h2>{{ name }}</h2>
        <div class="container flex">
          <div class="flex">
            <div class="inner-container">
              <font-awesome-icon
                class="fa-regular"
                icon="fa-regular fa-face-smile"
              />
              <span>{{ age }}</span>
            </div>
            <div>
              <font-awesome-icon
                class="fa-solid"
                icon="fa-solid fa-calendar-week"
              />
              <span>{{ day }}</span>
            </div>
            <div>
              <font-awesome-icon
                class="fa-regular"
                icon="fa-regular fa-clock"
              />
              <span>{{ hour }}</span>
            </div>
          </div>
          <div class="flex">
            <div>
              <font-awesome-icon
                class="fa-solid"
                icon="fa-solid fa-calendar-days"
              />
              <span>{{ duration }}</span>
            </div>
            <div>
              <font-awesome-icon
                class="fa-solid"
                icon="fa-solid fa-location-dot"
              />
              <span>{{ place }}</span>
            </div>
            <div>
              <font-awesome-icon
                class="fa-solid"
                icon="fa-solid fa-money-bills"
              />
              <span>{{ price }} DKK</span>
            </div>
          </div>
        </div>
      </div>
      <img :src="img" alt="" />
    </div>
    <!-- <font-awesome-icon class="fa-solid arrow" icon="fa-solid fa-chevron-down" /> -->
    <transition name="fade-info" mode="out-in">
      <div class="flex moreinfo_div" v-if="isClicked">
        <div class="instructor">
          <font-awesome-icon class="fa-solid" icon="fa-solid fa-user" />
          <span>Instructor: {{ trainer }}</span>
        </div>
        <p>
          {{ description }}
        </p>
        <a href="" class="button" @click.prevent="showDialog">Register</a>
      </div>
    </transition>
  </article>

  <booking-modal @close="hideDialog" :open="dialogIsVisible"></booking-modal>
</template>

<script>
import BookingModal from "./BookingModal.vue";
export default {
  components: {
    BookingModal,
  },
  props: [
    "name",
    "price",
    "age",
    "day",
    "hour",
    "duration",
    "place",
    "trainer",
    "description",
    "img",
  ],
  data() {
    return {
      isClicked: false,
      dialogIsVisible: false,
    };
  },
  methods: {
    arrowClicked() {
      this.isClicked = !this.isClicked;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style scoped>
.fa-solid,
.fa-regular {
  font-size: 2rem;
  padding-right: 2rem;
  color: rgb(115, 34, 34);
}

.container {
  flex-direction: row;
  gap: 4rem;
}

.container div {
  flex-direction: column;
  gap: 2rem;
}

.inner-container {
  flex-direction: row;
}

article {
  background-color: rgb(219, 219, 219);
  padding: 2rem 4rem;
  cursor: pointer;
  margin-bottom: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

span {
  font-size: 1.6rem;
}

img {
  width: 30%;
}

.card {
  gap: 4rem;
  justify-content: space-between;
}

.instructor{
  margin-top: 2rem
}

h2 {
  margin-bottom: 3rem;
}

.arrow {
  display: flex;
  cursor: pointer;
  display: flex;
  margin: 0 auto;
}

.moreinfo_div {
  flex-direction: column;
  gap: 3rem;
  width: inherit;
}

.fade-info-enter-from,
.fade-info-leave-to {
  opacity: 0;
  height:0
}

.fade-info-enter-active {
  transition: all 0.7s ease-out;
}

.fade-info-leave-active {
  transition: all 0.5s ease-in;
}

.fade-info-enter-to,
.fade-info-leave-from {
  opacity: 1;
  height:25rem
}
</style>
