<template>
    <main>
        <div class="background">
        <the-heading>Activities at GymAalborg</the-heading>
        <h2>Playroom</h2>
            <div class="playroom">
                <div class="playroom-header">
                    <p>The Gym Playroom takes place in Gymnastikkens Hus 
                        on Thursday and Friday mornings from 9-11 am. 
                        (however, Fridays only on even weeks. There is plenty 
                        of opportunity to play on the gymnastic equipment.<br>
                        <br>Here there is a wide selection of foam equipment, swings, 
                        crawling places and many other motorically challenging equipment just to go to.<br>
                        <br>All day care and nursery children are also welcome with staff.<br>
                        <br>It costs DKK 25/person. payable at the entrance, or 10-trip clip card for DKK 200 on this page.<br>
                        <br>It is possible to bring packed lunches, which can be eaten at tables in our living room.
                        <br>
                        <br>
                            <ul class="notice">
                                <li>All stays on the tools are at your own risk.</li>
                            </ul>
                        </p>

                        <p>
                            The children can among other things:
                            <ul class="playroom-act">
                                <li>Large trampoline</li>
                                <li>Trampoline track</li>
                                <li>Foam pit</li>
                                <li>Swing in rings and bars</li>
                                <li>Cable car</li>
                                <li>Roller coaster</li>
                            </ul>
                        </p>

                    <div class="act-img">
                        <img src="../../assets/swing.jpg" alt="swing-picture">
                        <img src="../../assets/ladder.jpg" alt="ladder-picture">
                        <img src="../../assets/jump.jpg" alt="jump-picture">
                    </div>
                </div>

                <div class="playroom-info-section">
                    <div class="playroom-info">
                        <h3>More info:</h3>
                        <div class="entrance-icon">
                            <img src="../../assets/GymLand-ICONS/payment.svg" alt="money-bills-logo">
                            <p><span>Entrance 35 DKK</span><br>
                                *Payable in cash or via MobilePay at the entrance
                            </p>
                        </div>
                        <div class="parking-icon">
                            <img src="../../assets/GymLand-ICONS/parking.svg" alt="parking-sign">
                            <p>FREE parking right outside the hall</p>
                        </div>
                        <div class="ticket-icon">
                            <img src="../../assets/GymLand-ICONS/activity.svg" alt="ticket-logo">
                            <p>10-trip ski pass DKK 300 <br>
                                *Registration / purchase of the first clip card takes place <span>here.</span> <br>
                                When the first clip card is used up, a new clip card can be purchased in our <span>webshop.</span>
                            </p>
                        </div>                  
                    </div>

                    <div class="playroom-location">
                        <div class="location-icon">
                            <img src="../../assets/GymLand-ICONS/location.svg" alt="location-logo">
                            <address>
                                Gymnastikkens Hus, Karlskogavej 8B
                            </address><br>
                        </div>

                        <div class="calendar-icon">
                            <img src="../../assets/GymLand-ICONS/calendar.svg" alt="calendar-logo">
                            <p><strong>Saturday:</strong> <br>
                                    <time>9:00 – 10:30</time> (Reserved for 0-6 years) <br>
                                    <time>10:45 – 12:15</time> (Reserved +7 years) <br>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="notice-info">
                    <ul>
                        <li>Note</li>
                    </ul>
                    <p>
                        When registering for the Gym playroom, a 10-trip clip card is included. 
                        The cutting card is handed out at the reception in Gymnastikkens Hus 
                        on presentation of the receipt. If you, as a parent, want to register 
                        your child for GymLegestue, it is important that you first go in and create 
                        the child under 'My profile' > 'Go to profile' > 'Associate family member', 
                        and then you can then register the child for GymLegestue.
                    </p>
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
        text-transform: uppercase;
        color: var(--lighterred);
        margin: 3rem 0;
    }

    .playroom-header {
        margin-bottom: 5rem;
    }

    .playroom-header p {
        width: 60%;
    }

    ul {
        font-size: 1.6rem;
        color: var(--lighterred);
    }

    .notice {
        font-weight: bold;
        list-style-image: url('../../assets/GymLand-ICONS/info.svg');
        margin-bottom: 5rem;
    }

    .playroom-act {
        display: flex;
        flex-direction: column;
        row-gap: 1rem;
        margin-top: 2rem;
        list-style-image: url('../../assets/gym-logo-transp-small.png');
        list-style-position: inside;
    }

    .act-img {
        display: flex;
        column-gap: 3rem;
        justify-content: space-around;
        margin-top: 5rem;
    }

    .act-img img {
        max-width: 35%;
        height: auto;
    }

    .playroom-info {
        display: flex;
        flex-direction: column;
        row-gap: 2.5rem;
        width: 50%;
    }

    .playroom-info h3 {
        color: var(--lighterred);
        font-weight: bold;
        font-size: 1.6rem;
    }

    .playroom-info span {
        font-weight: bold;
    }

    .entrance-icon,
    .parking-icon,
    .ticket-icon {
        display: flex;
        column-gap: 2.5rem;
        align-items: flex-start;
    }

    .playroom-info-section {
        display: flex;
        margin-top: 5rem;
        column-gap: 2rem;
    }

    .playroom-location {
        display: flex;
        flex-direction: column;
        column-gap: 3rem;
        row-gap: 3rem;
        margin-top: 5rem;
    }

    .calendar-icon,
    .location-icon {
        display: flex;
        align-items: flex-start;
        column-gap: 2.5rem;
    }

    address {
        font-style: normal;
        font-size: 1.6rem;
        font-weight: bold;
    }

    .notice-info {
        margin-top: 5rem;
        background-color: #bf4b212c;
        padding: 4rem;
    }

    .notice-info ul {
        list-style-image: url('../../assets/GymLand-ICONS/info.svg');
    }

    .notice-info ul > li {
        color: var(--lighterred);
        text-transform: uppercase;
    }
</style>