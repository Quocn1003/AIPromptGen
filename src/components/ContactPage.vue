<template>
  
  <div class="container-fluid container-fluid-lg py-5">

    <div class="row">
      <div class="col-12">

        <h1 class="text-light mb-4">Liên hệ</h1>
        
        <div class="card w-100 bg-dark border-secondary mb-4">
          <div class="card-body text-light">
            <h5 class="card-title">Thông tin liên hệ</h5>
            <div class="mb-3">
              <i class="bi bi-envelope me-2"></i>
              <span>Email: quocn1003@gmail.com</span>
            </div>
            <div class="mb-3">
              <i class="bi bi-telephone me-2"></i>
              <span>Zalo: 0796 621 061</span>
            </div>
            <div class="mb-3">
              <i class="bi bi-geo-alt me-2"></i>
              <span>Địa chỉ: Nơi trái tim tan vỡ....</span>
            </div>

            <hr class="border-secondary my-4">
            
            <h5 class="card-title mb-4">Liên hệ qua mạng xã hội</h5>
            <div class="d-flex flex-wrap gap-2 justify-content-center">
              <a href="https://www.facebook.com/QuocNam100304/" target="_blank" class="btn btn-primary btn-sm d-flex align-items-center">
                <i class="bi bi-facebook me-1"></i>
                <span class="d-none d-sm-inline">Facebook</span>
              </a>
              <a href="https://www.instagram.com/hi_nam.ne/" target="_blank" class="btn btn-warning btn-sm d-flex align-items-center">
                <i class="bi bi-instagram me-1"></i>
                <span class="d-none d-sm-inline">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@quocn1003" target="_blank" class="btn btn-dark btn-sm d-flex align-items-center">
                <i class="bi bi-tiktok me-1"></i>
                <span class="d-none d-sm-inline">TikTok</span>
              </a>
              <a href="mailto:quocn1003@gmail.com" class="btn btn-success btn-sm d-flex align-items-center">
                <i class="bi bi-envelope me-1"></i>
                <span class="d-none d-sm-inline">Gmail</span>
              </a>
            </div>
          </div>
          
        </div>
        <p style="user-select: none;" class="card-text">
              Công cụ này cho phép bạn tạo ra các prompt tùy chỉnh theo các phong cách khác nhau. Bạn có thể nhập các thông tin như tên, nghề nghiệp, quần áo và phụ kiện để tạo ra một prompt cho mô hình của bạn.
            </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.card {
  width: 100% !important;
  max-width: none !important;
  display: block;
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
.list-group-item {
  transition: transform 0.2s;
}
.list-group-item:hover {
  transform: translateX(5px);
}
.container-fluid-lg {
  max-width: 1400px;
  margin: 0 auto;
}
</style> 
<!-- <template>
  <div class="container-fluid container-fluid-lg py-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-light mb-4">Liên hệ</h1>
        
        <div class="card bg-dark border-secondary">
          <div class="card-body text-light">
            <h5 class="card-title">Thông tin liên hệ</h5>
            <div class="mb-3">
              <i class="bi bi-envelope me-2"></i>
              <span>Email: quocn1003@gmail.com</span>
            </div>
            <div class="mb-3">
              <i class="bi bi-telephone me-2"></i>
              <span>Zalo: 0796 621 061</span>
            </div>
            <div class="mb-3">
              <i class="bi bi-geo-alt me-2"></i>
              <span>Địa chỉ: Nơi trái tim tan vỡ....</span>
            </div>

            <hr class="border-secondary my-4">

            <h5 class="card-title mb-4">Liên hệ qua mạng xã hội</h5>
            <div class="d-flex flex-wrap gap-2 justify-content-center">
              <a href="https://www.facebook.com/QuocNam100304/" target="_blank" class="btn btn-primary btn-sm d-flex align-items-center">
                <i class="bi bi-facebook me-1"></i>
                <span class="d-none d-sm-inline">Facebook</span>
              </a>
              <a href="https://www.instagram.com/hi_nam.ne/" target="_blank" class="btn btn-warning btn-sm d-flex align-items-center">
                <i class="bi bi-instagram me-1"></i>
                <span class="d-none d-sm-inline">Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@quocn1003" target="_blank" class="btn btn-dark btn-sm d-flex align-items-center">
                <i class="bi bi-tiktok me-1"></i>
                <span class="d-none d-sm-inline">TikTok</span>
              </a>
              <a href="mailto:quocn1003@gmail.com" class="btn btn-success btn-sm d-flex align-items-center">
                <i class="bi bi-envelope me-1"></i>
                <span class="d-none d-sm-inline">Gmail</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic here
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: translateY(-5px);
}
.btn {
  transition: transform 0.2s;
}
.btn:hover {
  transform: translateY(-2px);
}
.btn-warning {
  background-color: #FF6B00;
  border-color: #FF6B00;
  color: white;
}
.btn-warning:hover {
  background-color: #e05e00;
  border-color: #e05e00;
  color: white;
}
.container-fluid-lg {
  max-width: 1400px;
  margin: 0px;
}
</style>  -->