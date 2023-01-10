<template>
    <article class="flex">
        <h3>{{ h3 }}</h3>
        <h4> {{ h4 }}</h4>
        <div class="birthday-cards">
            <div class="bday-logo">
                <div class="bday-time">                
                    <div>
                        <img src="../../assets/GymLand-ICONS/time.svg" alt="time-logo">
                    </div>
                    <div>
                        <time>{{ time }}</time>
                        <p>{{ minutes }}</p>
                    </div>
                </div>

                <div class="bday-calendar">                
                    <div>
                        <img src="../../assets/GymLand-ICONS/calendar-bigger.svg" alt="calendar-logo">
                    </div>
                    <div>
                        <p>{{ date }}</p>
                    </div>
                </div>

                <div class="bday-price">
                    <div>
                        <img src="../../assets/GymLand-ICONS/payment-bigger.svg" alt="money-bills-money">
                    </div>
                    <div>
                        <p>{{ price }}</p>
                    </div>
                </div>
            </div>
        </div>
        <router-link to="/activities/birthday/birthday1" class="button">See more</router-link>
    </article>
</template>

<script>
export default {
    props: ["h3", "h4", "time", "price", "date", "minutes"]
}
</script>
<style scoped>

article {
    flex-direction: column;
    background-color: var(--lightgrey);
    padding: 4rem;
    border-radius: 40px;
    justify-content: center;
    text-align: center;
    border: 1px solid rgba(185, 184, 184, 0.788)

}

.bday-logo {
    display: flex;
    flex-direction: column;
    column-gap: 5rem;
    row-gap: 3rem;
    margin-bottom: 2rem;
}

img {
    width:2.4rem;
    height: auto
}

.bday-time,
.bday-calendar,
.bday-price {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
}

h3 {
    font-size: 2.3rem;
     color: #2B2B2B;
     font-weight: 700;
      text-align: left;
}

h4 {
    margin-bottom: 2rem;
     color: #2B2B2B;
     text-align: left;
}

p,
time {
    font-size: 1.6rem;
}

time
img {
    width: 30px;
    height: 30px;
}

a {
    align-self: center;
    width: 70%;
}
</style>