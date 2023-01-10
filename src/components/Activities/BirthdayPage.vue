<template>
    <main>
        <div class="background">
        <the-heading>Birthday at GymAalborg</the-heading>
        <h2>Celebrate your birthday</h2>
            <div class="birthday">
                <div class="birthday-header">
                    <h3>
                        Celebrate your birthday with your friends in Aalborg's funniest 
                        and most spectacular gymnasium, Gymnastikkens Hus
                    </h3>
                    <p>
                        Here you can experience many exciting gymnastics stations, 
                        play different games with your friends and even have the 
                        opportunity to learn how to somersault with one of our skilled instructors. <br>
                    </p>
                    <p class="birthday-info">
                        If you have any questions, please contact <a href="mailto:">reception@gymaalborg.dk</a>
                    </p>
                </div>
                <img src="../../assets/Bday.jpg" alt="Birthday-party">
            </div>

            <div class="birthday-offers">
                <h2>Find the birthday party that fits you</h2>

                <div class="offers-wrapper">
                    
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {

}
</script>

<style scoped>
    h2 {
        margin-top: 3rem;
        color: var(--lighterred);
    }

    h3 {
        font-size: 1.7rem;
        color: var(--greyfont);
    }

    .birthday {
        display: flex;
        justify-content: space-between;
    }

    .birthday img {
        width: 400px;
        height: 400px;
    }

    .birthday-header {
        width: 50%;
        display: flex;
        flex-direction: column;
        row-gap: 4rem;
    }

    .birthday-info {
        font-weight: bold;
        color: var(--greyfont);
    }

    .birthday-info a {
        color: var(--lighterred);
    }

    .birthday-offers h2 {
        margin-top: 5rem;
        text-align: center;
    }
</style>
