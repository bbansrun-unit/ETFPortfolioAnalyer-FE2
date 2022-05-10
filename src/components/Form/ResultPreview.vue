<template>
  <div class="preview list shadow-lg">
    <div class="item px-4 py-1.5 my-2 w-full flex flex-row flex-wrap justify-between" v-for="row in data" :key="row.id">
        <div class="code">{{ row.pCode }}</div>
        <div class="title">{{ row.title  }}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.item {
  cursor: pointer;
}
</style>