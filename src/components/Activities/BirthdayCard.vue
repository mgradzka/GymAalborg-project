<template>
    <article class="flex">
        <h3>{{ h3 }}</h3>
        <h4> {{h4}}</h4>
        <time>{{ time}}</time>
        <p>{{minutes}}</p>
        <p>{{date}}</p>
        <p>{{price}}</p>

    </article>
</template>

<script>
export default {
    props: ["h3", "h4", "time", "price", "date", "minutes"]
}
</script>
<style scoped>
article {
    flex-direction:column
}
</style>