<template>
    <article class="flex">
        <div class="flex">
      <h2>Try out our training first</h2>
      <p>
        Welcome to GymAalborg's website. In our association, we offer a wide
        range of teams within all ages and gymnastics disciplines.<br><br> We offer you
        to try our training first and you can decide based on your experience.
        We are looking forward to meet you.
      </p>
      <a href="" class="button">Let's try it</a>
      </div>
      <img src="@/assets/homepage1.jpg" class="img-homepage" alt="there will be img">
    </article>
</template>

<style scoped>
article {
    gap:3rem;
    align-items: center;
    padding-top:5rem
}
article div {
    flex-direction: column;
       gap: 2rem
}
h2{
    color: var(--red);
}
</style>