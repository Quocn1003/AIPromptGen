<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <Navbar />
    <main class="flex-grow-1">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style>
body {
  background-color: #212529;
  min-height: 100vh;
}
</style>
