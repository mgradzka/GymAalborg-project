<template>
  <main>
    <div class="background">
      <the-heading>Birthday at GymAalborg</the-heading>
      
      <div class="birthday">
        <div class="birthday-header">
          <h2>Celebrate your birthday</h2>
          <h3>
            Celebrate your birthday with your friends in Aalborg's funniest and
            most spectacular gymnasium, Gymnastikkens Hus
          </h3>
          <p>
            Here you can experience many exciting gymnastics stations, play
            different games with your friends and even have the opportunity to
            learn how to somersault with one of our skilled instructors. <br />
          </p>
          <p class="birthday-info">
            If you have any questions, please contact
            <a href="mailto:">reception@gymaalborg.dk</a>
          </p>
        </div>
        <img src="../../assets/Bday.jpg" alt="Birthday-party" />
      </div>

      <div class="birthday-offers">
        <h2>Find the birthday party that fits you</h2>

        <div class="offers-wrapper">
          <birthday-card
            v-for="card in birthdayCard"
            :key="card.h3"
            :h3="card.h3"
            :h4="card.h4"
            :time="card.time"
            :price="card.price"
            :date="card.date"
            :minutes="card.minutes"
          ></birthday-card>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BirthdayCard from './BirthdayCard.vue'
export default {
    components: {
        BirthdayCard
    },
    data(){
        return {
            birthdayCard: [
                {
                    h3: "Birthday Party",
                    h4: "Working days",
                    time: "14:00-16:30",
                    minutes: "(150 minutes)",
                    date: "01.02-31.08",
                    price: "775 DKK"
                },
                  {
                    h3: "Birthday Party",
                    h4: "Saturdays",
                    time: "12:00-14:30",
                    minutes: "(150 minutes)",
                    date: "01.02-31.08",
                    price: "850 DKK"
                },  {
                    h3: "Birthday Party",
                    h4: "Saturdays",
                    time: "16:00-18:30",
                    minutes: "(150 minutes)",
                    date: "01.02-31.08",
                    price: "850 DKK"
                },  {
                    h3: "Birthday Party",
                    h4: "Sundays",
                    time: "12:00-14:30",
                    minutes: "(150 minutes)",
                    date: "01.02-31.08",
                    price: "850 DKK"
                },  {
                    h3: "Birthday Party",
                    h4: "Sundays",
                    time: "15:00-17:30",
                    minutes: "(150 minutes)",
                    date: "01.02-31.08",
                    price: "850 DKK"
                }

            ]
        }
    }

}
</script>

<style scoped>
h2 {
  
  color: var(--red);
}

h3 {
  font-size: 1.7rem;
  color: var(--greyfont);
}

.birthday {
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;
  gap:6rem
}

.birthday img {
  max-width: 40%;
  height: auto;
}

.birthday-header {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.birthday-info {
  font-weight: bold;
  color: var(--greyfont);
}

.birthday-info a {
  color: var(--lighterred);
}

.birthday-offers h2 {
  margin-top: 10rem;
  text-align: center;
}

.offers-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 5rem;
    /* width: 80%; */
    align-items: center;
    justify-self: center;
    margin: 0 auto;
    margin-top: 5rem;
}

birthday-card {
    align-self: center;
    justify-content: center;
    justify-self: center;
    justify-items: center;
}
</style>
