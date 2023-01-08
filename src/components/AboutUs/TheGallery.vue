<template>
    <h2>GymAalborg's gallery</h2>
    <h3>Summer at GymAalborg</h3>
    <div class="flex">
        
        <img v-for="(img, index) in gallery1" :key="index.img" :src="img" alt="">
    </div>
      <h3>Birthdays</h3>
    <div class="flex">
        <img v-for="(img, index) in gallery2" :key="index.img" :src="img" alt="">
    </div>
      <h3>Competitions</h3>
    <div class="flex">
        <img v-for="(img, index) in gallery3" :key="index.img" :src="img" alt="">
    </div>
      <h3>Building our GymHall</h3>
    <div class="flex">
        <img v-for="(img, index) in gallery4" :key="index.img" :src="img" alt="">
    </div>
</template>

<script>
export default {
    data(){
        return {
            gallery1: [
                "../assets/summer1.jpg",
                "../assets/summer2.jpg",
                "../assets/summer3.jpg"
            ],
            gallery2: [
                "../assets/birthday1.jpg",
                "../assets/birthday2.jpg",
                "../assets/birthday3.jpg"
            ],
            gallery3: [
                "../assets/1.jpg",
                "../assets/2.jpg",
                "../assets/3.jpg"
            ],
             gallery4: [
                "../assets/building1.jpg",
                "../assets/building2.jpg",
                "../assets/building3.jpg"
            ]
        }
    }
}
</script>

<style scoped>
img {
    width:30rem
}

h2 {
    margin-bottom: 2rem
}

h3{
    font-size:1.6rem;
}

div {
    gap: 2rem;
    margin-bottom:3rem
}
</style>