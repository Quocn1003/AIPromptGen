<template>
  <div class="container-fluid container-fluid-lg py-5">
    <div class="row">
      <div class="col-12">
        <h1 class="text-light mb-4">Hướng Dẫn Sử Dụng Công Cụ Tạo Prompt</h1>
        
        <div class="card bg-dark border-secondary mb-4">
          <div class="card-body text-light">
            <h5 class="card-title">Giới Thiệu</h5>
            <p class="card-text">
              Công cụ này cho phép bạn tạo ra các prompt tùy chỉnh theo các phong cách khác nhau. Bạn có thể nhập các thông tin như tên, nghề nghiệp, quần áo và phụ kiện để tạo ra một prompt cho mô hình của bạn.
            </p>
          </div>
        </div>

        <div class="card bg-dark border-secondary">
          <div class="card-body text-light">
            <h5 class="card-title">Cách Sử Dụng</h5>
            <p class="card-text">Làm theo các bước sau để tạo prompt của bạn:</p>
            <ol class="list-group list-group-numbered list-group-flush">
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Chọn phong cách bạn muốn sử dụng ở màn hình Home bằng cách ấn vào nút "Tạo Prompt" của phong cách đó.
              </li>
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Nhập tên mô hình (Lưu ý: Nên dùng tiếng Việt không dấu để tránh lỗi font chữ) Ví dụ: "Truong Nguyen"
              </li>
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Nhập nghề nghiệp của mô hình. (Lưu ý: Nên dùng tiếng Việt không dấu để tránh lỗi font chữ) Ví dụ: "Developer"
              </li>
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Mô tả quần áo, kiểu tóc, trang sức, màu da, mà mô hình sẽ mặc. (Dùng tiếng Việt được) Ví dụ: "Quần áo xanh, kiểu tóc trên, trang sức mẫu xanh, mà mô hình sẽ mặc xanh"
              </li>
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Mô tả các phụ kiện xung quanh mô hình. (Dùng tiếng Việt được) (Ví dụ: máy tính, bút cảm ứng, ống nghe, v.v.).
              </li>
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Nhấn nút "Tạo Prompt" để tạo ra prompt hoàn chỉnh. Kéo xuống và nút "Sao chép Prompt", Prompt sẽ được tự động copy!
              </li>
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Paste Propmt vừa copy vào <a href="https://chatgpt.com">Chat GPT</a>. Upload hình cùng với prompt rồi tạo ảnh
              </li>
              <li class="list-group-item text-start bg-dark text-light border-secondary">
                Sau khi Chat GPT tạo ảnh xong, hình sẽ không giống mặt bạn. Bạn có thể vào <a href="https://remaker.ai/face-swap-free/">Remaker</a> để đổi gương mặt giống nhất với hình của bạn
              </li>
            </ol>
          </div>
        </div>

        <button class="btn btn-primary mt-3">
          <router-link class="nav-link" to="/">Quay về trang chủ</router-link></button>
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