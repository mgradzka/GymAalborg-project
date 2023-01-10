<template>
  <div v-if="open" class="backdrop" @click="$emit('close')"></div>
  <transition name="modal">
    <form open v-if="open" class="flex" @submit.prevent="submitSurvey">
      <h2>Join our team!</h2>
      <div class="flex input-fields">
        <div class="flex input">
          <label for="name">Name</label>
          <input class="data" type="text" name="name" id="name" v-model.trim="enteredName" />
        </div>
        <!-- <base-button @click="addExercise">Add exercise</base-button> -->
        <div class="flex input">
          <label for="Surname">Surname</label>
          <input class="data"
            type="Surname"
            name="Surname"
            id="Surname"
            v-model.trim="enteredSurname"
          />
        </div>
      </div>
      <div class="flex">
        <div class="flex input">
          <label for="email">Email</label>
          <input class="data"
            type="email"
            name="email"
            id="email"
            v-model.trim="enteredEmail"
          />
        </div>
        <div class="flex input">
          <label for="Phone">Phone</label>
          <input class="data"
            type="Phone"
            name="Phone"
            id="Phone"
            v-model.trim="enteredPhone"
          />
        </div>
      </div>
        <label for="Training">I want to work as a... </label>
      <div class="flex input training">
        <div class="option flex">
          <input 
            type="radio"
            id="Trainer"
            value="Trainer"
            name="radio"
            v-model="chosenRole"
          />
          <label for="rating-poor">Trainer</label>
        </div>
        <div class="option flex">
          <input
            type="radio"
            id="Volunteer"
            value="Volunteer"
            name="radio"
            v-model="chosenRole"
          />
          <label for="rating-average">Volunteer</label>
        </div>
      
      </div>
    
      <div class="button-container flex">
        <a class="button close" @click="$emit('close')">Close</a>
        <button href="" id="confirm">Apply</button>
      </div>
      <transition>
        <p v-if="invalidInput">
        One or more input fields are invalid. Please check your provided data.
      </p>
      </transition>
     <transition> <p v-if="dataSubmitted">
        <font-awesome-icon
                class="fa-regular"
                icon="fa-regular fa-face-smile"
              /> Thank you - we have received your submission! Check your email regarding further instructions.
      </p></transition>
      <p v-if="error">{{ error }}</p>
    </form>
  </transition>
</template>

<script>
export default {
   props: ["open"],
  emits: ["close"],
  data() {
    return {
      enteredName: "",
      enteredSurname: "",
      enteredEmail: "",
      enteredPhone: "",
      chosenRole: null,
      invalidInput: false,
      dataSubmitted: false,
      error:null
    };
  },
  methods: {
    submitSurvey() {
      if (
        this.enteredName === "" ||
        this.enteredSurname === "" ||
        this.enteredEmail === "" ||
        this.enteredPhone === "" ||
        !this.chosenRole
      ) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      this.error = null;
      fetch(
        "https://gymaalborg-applications-default-rtdb.firebaseio.com/applications.json",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            name: this.enteredName,
            surname: this.enteredSurname,
            phone: this.enteredPhone,
            email: this.enteredEmail,
            role: this.chosenRole,
          }),
        }
      )
        .then((response) => {
          if (response.ok) {
            // ..dataSubmitted
            this.dataSubmitted = true;
          } else {
            throw new Error("Could not save data!");
          }
        })
        .catch((error) => {
          console.log(error);
          this.error = error.message;
        });

      (this.enteredName = ""),
        (this.enteredSurname = ""),
        (this.enteredEmail = ""),
        (this.enteredPhone = ""),
        (this.chosenRole = null);
    },
  },
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

.data {
    width: auto
}

.input-fields {
  padding-bottom: 1rem;
}
h2 {
  margin-bottom: 2rem;
}
label {
  font-size: 1.6rem;
}
input {
  border-radius: 36px;
  border: 1px solid rgb(175, 175, 175);
  height: 3rem;
  padding: 1rem;
}

.option {
    align-items: center;
    gap:1rem
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

form {
  gap: 2rem;
  flex-direction: column;
  position: fixed;
  top: 20vh;
  align-content: center;
  width: 60rem;
  height: 50rem;
  margin: 0 20rem;
  border-radius: 12px;
  padding: 4rem;
  background-color: rgb(231, 231, 231);
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

.button-container {
  /* margin-top: 5rem; */
  gap: 2rem;
}

.modal-enter-active {
  animation: modal 0.3s ease-out;
}

.modal-leave-active {
  animation: modal 0.3s ease-in reverse;
}

p {
    font-size: 1.4rem
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
