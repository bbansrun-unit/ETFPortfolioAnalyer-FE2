<template>
  <div class="relative" id="area">
    <Sidebar />
    <main class="relative md:ml-64 bg-blueGray-100">
      <Header />
      <div class="content px-4 md:px-10 mx-auto w-full -m-24">
        <div class="px-4 md:px-10 mx-auto w-full -m-24">
          <!-- Form -->
          <ETFSearch />
          <!-- Form -->
        </div>
      </div>
      <Footer />
    </main>
  </div>
</template>

<script>
import Header from "../components/Navigation/DashboardHeader.vue"
import Footer from "../components/Navigation/DashboardFooter.vue"
import Sidebar from "../components/Sidebar/Sidebar.vue"
import ETFSearch from '../components/layout/ETFSearch.vue'

export default {
    components: {
        Header,
        Footer,
        Sidebar,
        ETFSearch,
    }
}
</script>

<style lang="scss">

</style>