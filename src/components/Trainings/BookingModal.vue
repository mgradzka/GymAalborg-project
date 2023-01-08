<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <dialog open v-if="open" class="flex">
      <h2>Booking information</h2>
      <div class="flex input-fields">
        <div class="flex input">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <!-- <base-button @click="addExercise">Add exercise</base-button> -->
        <div class="flex input">
          <label for="Surname">Surname</label>
          <input type="Surname" name="Surname" id="Surname" />
        </div>
      </div>
      <div class="flex">
        <div class="flex input">
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div class="flex input">
          <label for="Phone">Phone</label>
          <input type="Phone" name="Phone" id="Phone" />
        </div>
      </div>
      <div class="flex input training">
        <label for="Training">Training</label>
        <input type="Training" name="Training" id="Training" />
      </div>
      <div class="button-container flex">
        <button class="button close" @click="$emit('close')">Close</button>
        <a href="" id="confirm">Confirm</a>
      </div>
    </dialog>
  </transition>
</template>

<script>
export default {
  props: ["open"],
  emits: ["close"],
};
</script>
<style scoped>
.modal {
  background-color: rgb(55, 54, 54);
}

#confirm {
  background-color: rgb(34, 152, 34) !important;
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  background-color: var(--red);
  /* border-radius: 20px; */
  color: white;
  padding: 1rem 1.4rem;
  width: fit-content;
  font-weight: 400;
  text-align: center;
  transition: 0.4s ease-in;
  border: none;
  border-radius: 40px;
}

.input {
  flex-direction: column;
  gap: 0.6rem;
  padding-right: 3rem;
}

.input-fields {
  padding-bottom: 1rem;
}
h2 {
  margin-bottom: 2rem;
}
label {
  font-size: 1.4rem;
}
input {
  border-radius: 36px;
  border: 1px solid rgb(175, 175, 175);
  height: 3rem;
  padding: 1rem;
}

.training input {
  width: 35rem;
}

.button {
  border-radius: 30px;
  padding: 1rem 2rem;
}
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  gap: 2rem;
  flex-direction: column;
  position: fixed;
  top: 20vh;
  width: 60rem;
  height: 45rem;
  margin: 0 auto;
  border-radius: 12px;
  padding: 4rem;
  background-color: rgb(231, 231, 231);
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

.button-container {
  margin-top: 5rem;
  gap: 2rem;
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
