<template>
  <div>
      <input
        type="text"
        class="rounded-lg shadow-lg p-4 my-2 w-full"
        name="etfCode"
        id="etfCode"
        v-model="query"
        :placeholder="placeholder"
        @keyup="preview"
        @blur="preview"
       />
  </div>
</template>

<script>
export default {
    data () {
        return {
            query: '',
            placeholder: "Text what you wanna search: ",
        }
    },
    methods: {
        preview () {
            this.$emit('preview', this.query)
        }
    }
}
</script>

<style>

</style>