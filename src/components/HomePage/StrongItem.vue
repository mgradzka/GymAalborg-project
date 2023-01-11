<template>
  <article class="flex">
    <div>
      <font-awesome-icon class="fa-solid" icon="fa-solid fa-check" />
    </div>
    <h3>{{ h3 }}</h3>
    <p>{{ p }}</p>
  </article>

</template>

<script>
export default {
  props: ["p", "h3"],
};
</script>

<style scoped>
article {
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 2rem;
  align-items: center;
  
  gap:2rem
}
div {
  border-radius: 50%;
  background-color: var(--greyfont);
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
  display: flex;
  align-self: center;
}

.fa-solid {
  color: white;
  font-size: 2rem;
  padding: 8px 0 0 10px;
}
h3 {
  font-size: 2rem;
  text-align: center;
  color: var(--greyfont);
}
p {
  font-size: 1.2rem;
  text-align: center;
  color: var(--greyfont);
}
</style>
