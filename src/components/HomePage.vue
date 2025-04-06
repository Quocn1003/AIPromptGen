<template>
  <main class="container py-5">
    <div class="text-center mb-4">
      <p class="text-light">
        <i class="bi bi-info-circle"></i> 
        Xem hướng dẫn sử dụng chi tiết và gợi ý tạo prompt tại 
        <router-link to="/huong-dan" class="text-primary">đây</router-link>
      </p>
    </div>
    <div class="row g-4">
      <!-- Card 1 -->
      <div class="col-md-6">
        <div class="card bg-dark border-secondary h-100">
          <img src="../assets/PromtViDoChoi.png" class="card-img-top" alt="Model 1">
          <div class="card-body text-light">
            <h5 class="card-title">Mô hình vỉ đồ chơi</h5>
            <p class="card-text">Mô hình đồ chơi chính bạn và các đồ vật trong hộp nhựa trong suốt với tên gọi là "Vỉ đồ chơi".</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#promptModel1Modal">Tạo Prompt</button>
          </div>
        </div>
      </div>
      <!-- Card 2 -->
      <div class="col-md-6">
        <div class="card bg-dark border-secondary h-100">
          <img src="../assets/PromtCanPhong3D.png" class="card-img-top" alt="Model 2">
          <div class="card-body text-light">
            <h5 class="card-title">Mô hình căn phòng 3D</h5>
            <p class="card-text">Mô hình căn phòng 3D và bạn là nhân vật chính nghe hấp dẫn nhỉ!</p>
            <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#promptModel2Modal">Tạo Prompt</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Model 1 -->
    <div class="modal fade" id="promptModel1Modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content bg-dark">
          <div class="modal-header border-secondary">
            <h5 class="modal-title text-light">Tạo Prompt - Mô hình vỉ đồ chơi</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <PromptModel1 />
          </div>
        </div>
      </div>
    </div>

    <!-- Modal for Model 2 -->
    <div class="modal fade" id="promptModel2Modal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content bg-dark">
          <div class="modal-header border-secondary">
            <h5 class="modal-title text-light">Tạo Prompt - Mô hình căn phòng 3D</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <PromptModel2 />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import PromptModel1 from './PromptModel1.vue'
import PromptModel2 from './PromptModel2.vue'
</script>

<style scoped>
.modal-content {
  border-color: #495057;
}
.modal-header {
  border-bottom-color: #495057;
}
.modal-body {
  color: #fff;
}
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
.text-primary {
  text-decoration: none;
}
.text-primary:hover {
  text-decoration: underline;
}
</style> 