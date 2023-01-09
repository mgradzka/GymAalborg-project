<template>
  <article class="flex">
    <div class="flex">
      <h2><slot name=heading></slot></h2>
      <p>
        <slot name=para></slot>
      </p>
      <a href="" class="button">I am interested!</a>
    </div>
       <img src="@/assets/homepage2.jpg" class="img-homepage" alt="there will be img" />
   
  </article>
</template>

<style scoped>
article {
  /* background-color: rgb(250, 250, 250); */
  padding: 5rem 5rem 5rem 0;
    gap:3rem;
    align-items: center;
    flex-direction: row-reverse;
}
article div {
    flex-direction: column;
    gap: 2rem
}

h2{
    color: var(--red);
}

</style>