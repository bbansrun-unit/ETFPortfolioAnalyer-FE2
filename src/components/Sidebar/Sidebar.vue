<template>
  <aside class="aside md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
    <div class="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center w-full mx-auto">
      <header class="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
        <h1>
          <a href="">TITLE</a>
        </h1>
        <hr class="my-4 md:min-w-full">
      </header>
      <nav class="lnb">
        <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Menu</h6>
        <ul class="menu">
          <li>LINK1</li>
          <li>LINK2</li>
        </ul>
        <hr class="my-4 md:min-w-full">

        <h6 class="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">Login</h6>
        <ul class="menu auth">
          <li>
            <router-link to="login">LOGIN</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {

}
</script>

<style lang="scss">
aside {
    background: #f5f7f9;
}
</style>