<template>
  <div>
    <header class="app-header">
      <app-nav></app-nav>
    </header>
    <Head></Head>
    <main class="row myCont">
      <CardLeft></CardLeft>
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import AppNav from './components/AppNav'
import Head from './components/Head'
import CardLeft from './components/CardLeft'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    AppNav,
    Head,
    CardLeft,
    Footer
  }
}
</script>

<style>
.myCont{
  display: flex;
}
</style>
