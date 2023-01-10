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
        <a href="" class="button">See more</a>
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
    padding: 6rem 3rem 6rem 3rem;
    border-radius: 40px;
    width: 90%;
    justify-content: center;
    text-align: center;
}

.bday-logo {
    display: flex;
    flex-direction: column;
    column-gap: 5rem;
    row-gap: 3rem;
    margin-bottom: 2rem;
}

.bday-time,
.bday-calendar,
.bday-price {
    display: flex;
    flex-direction: row;
    column-gap: 2rem;
}

h3 {
    font-size: 2.5rem;
}

h4 {
    margin-bottom: 2.5rem;
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