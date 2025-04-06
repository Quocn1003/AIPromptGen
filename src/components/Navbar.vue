<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary w-100">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="../assets/AIPrompttGen.png" alt="Logo" height="50" class="d-inline-block align-text-top">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Trang chủ</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/huong-dan">Hướng dẫn</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/lien-he">Liên hệ</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.navbar {
  padding: 0;
}
.navbar .container-fluid {
  padding: 0.5rem 2rem;
}
.navbar-brand {
  padding: 0;
}
.navbar-brand img {
  transition: transform 0.2s;
}
.navbar-brand img:hover {
  transform: scale(1.1);
}
</style> 