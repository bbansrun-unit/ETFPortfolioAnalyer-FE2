<template>
  <div class="content wrapper my-96">
      <header class="header text-center text-xl">
        <h2>MESSAGE</h2>
      </header>
      <form @submit.prevent class="form">
        <search-box @preview="onPreview" />
        <result-preview v-show="enablePreview" :data="filterList" />
      </form>
  </div>
</template>

<script>
import ResultPreview from '../Form/ResultPreview.vue'
import SearchBox from "../Form/SearchBox.vue"

export default {
  data () {
    return {
      query: '',
      data: [
        { id: 407160, pCode: 407160, title: 'TEST TITLE', },
        { id: 407170, pCode: 407170, title: 'TEST TITLE', },
        { id: 111111, pCode: 111111, title: 'TEST TITLE', },
        { id: 222222, pCode: 222222, title: 'TEST TITLE', },
        { id: 333333, pCode: 333333, title: 'TEST TITLE', },
      ],
      enablePreview: false,
    }
  },
  components: { SearchBox, ResultPreview },
  computed: {
    filterList () {
      return this.data
    }
  },
  methods: {
    onPreview (query) {
      this.query = query
      if (this.query) {
        this.enablePreview = true
      } else {
        this.enablePreview = false
      }
    },
  },
}
</script>

<style>

</style>