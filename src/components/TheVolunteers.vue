<template>
  <article class="flex">
    <div class="flex">
      <h2><slot name=heading></slot></h2>
      <p>
        <slot name=para></slot>
      </p>
      <a href="" class="button" @click.prevent="showDialog">I am interested!</a>
    </div>
       <img src="@/assets/homepage2.jpg" class="img-homepage" alt="there will be img" />
   <modal-application @close="hideDialog" :open="dialogIsVisible"></modal-application>
  </article>
</template>

<script>
import ModalApplication from './ModalApplication.vue'
export default {
  components : {
    ModalApplication
},
data(){
  return{
    dialogIsVisible: false,
  }
},
 methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
}
</script>
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