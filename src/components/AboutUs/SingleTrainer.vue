<template>

  <article class="flex">
    <img :src="img" alt="" />
    <h4>{{ name }}</h4>
    <p>{{ title }}</p>
    <address>{{ mail }}</address>
  </article>
  <!-- <article>
        <img :src="`../../assets/` + `${trainers[0].image}`" alt="">
             
        <h4>{{ trainers[0].image}}</h4>
        <p>{{title}}</p>
        <address>{{mail}}</address>
    </article> -->
</template>
<script>
export default {
  props: ["id", "name", "title", "img", "mail"],
};
</script>

<style scoped>
img {
    border: 1px solid black;
    border-radius: 50%;
    max-width:20rem
}

article {
    flex-direction:column;
    gap:1rem;
    justify-content:center;
    align-items:center
}


address {
    font-style:normal;
    font-size:1.4rem
}

img:hover {
 transform: scale(1.05);
 
}
</style>
