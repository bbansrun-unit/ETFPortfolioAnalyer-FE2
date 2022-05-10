<template>
  <div class="relative" id="area">
    <Header />
    <main class="min-h-max">
        <AuthForm />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Navigation/AuthHeader.vue"
import Footer from "../components/Navigation/AuthFooter.vue"
import AuthForm from "../components/Form/AuthForm.vue"

export default {
  components: {
    Header,
    Footer,
    AuthForm
}
}
</script>

<style lang="scss" scoped>
#area {
    color: white;
    background: slategrey;
}
</style>