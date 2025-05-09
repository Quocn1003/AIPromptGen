<template>
  <div class="prompt-form">
    <div class="mb-3">
      <label for="nameInput" class="form-label">Bảng tên:</label>
      <input 
        class="form-control bg-dark text-light" 
        id="nameInput" 
        rows="4" 
        v-model="name"
        placeholder="Nhập tên(nên dùng tiếng Việt không dấu tránh lỗi font)"
      >
      <label class="form-label">Giới tính:</label>
      <div class="d-flex gap-3">
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="radio" 
            id="maleRadio" 
            value="boy" 
            v-model="gender"
          >
          <label class="form-check-label" for="maleRadio">Nam</label>
        </div>
        <div class="form-check">
          <input 
            class="form-check-input" 
            type="radio" 
            id="femaleRadio" 
            value="girl" 
            v-model="gender"
          >
          <label class="form-check-label" for="femaleRadio">Nữ</label>
        </div>
      </div>
      <label for="characterInput" class="form-label">Mô tả trang phục và ngoại hình của nhân vật:</label>
      <textarea 
        class="form-control bg-dark text-light" 
        id="characterInput" 
        rows="4" 
        v-model="character"
        placeholder="Mô tả về quần áo, kiểu tóc, trang sức, đồng hồ,...(có thể dùng tiếng Việt có dấu)"
      ></textarea>
      <button class="btn btn-primary mt-3" @click="generatePrompt">Tạo Prompt</button>
      <div v-if="generatedPrompt" class="mt-3">
        <h6>Prompt đã tạo:</h6>
        <div class="p-3 bg-secondary rounded">
          <pre class="text-light mb-0">{{ generatedPrompt }}</pre>
        </div>
        <button class="btn btn-outline-light mt-2" @click="copyPrompt">
          <i class="bi bi-clipboard"></i> Sao chép
        </button>
      </div>
    </div>
    <!-- Toast notification -->
    <div class="toast-container position-fixed bottom-0 end-0 p-3">
      <div id="toast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
          <strong class="me-auto">Thông báo</strong>
          <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
        <div class="toast-body">
          {{ toastMessage }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import * as bootstrap from 'bootstrap'

const name = ref('')
const gender = ref('')
const character = ref('')
const generatedPrompt = ref('')
const toastMessage = ref('')

const showToast = (message, type = 'success') => {
  toastMessage.value = message
  const toastEl = document.getElementById('toast')
  if (toastEl) {
    const toast = new bootstrap.Toast(toastEl)
    toast.show()
  }
}

const generatePrompt = () => {
  // Logic tạo prompt dựa trên input và options
  
  generatedPrompt.value = `
  3D Chibi Drawing. 3D style claw machine viewed from a 45 degree angle, cozy diffused lighting. Use this image to create a minimalist 3D illustration of a cozy scene designed to be hidden inside a rectangular claw machine. The exterior has soft curves, details and galaxy-style elements, with a nameplate that says "[${name.value}]" on top, all rendered in a soft plastic texture in candy pastel colors like pastel yellow, pastel purple, pastel pink and pastel blue, Inside the machine a [${gender.value}] has an outfit [${character.value}] standing and posing, surrounded by many cute little stuffed animals and cute stickers to decorate the eye
  `
}

const copyPrompt = async () => {
  try {
    await navigator.clipboard.writeText(generatedPrompt.value)
    showToast('Đã sao chép prompt vào clipboard!')
    // Mở ChatGPT trong cửa sổ mới ngay lập tức
    window.open('https://chat.openai.com', '_blank', 'noopener,noreferrer')
  } catch (err) {
    showToast('Không thể sao chép prompt!', 'error')
  }
}
</script>

<style scoped>
.prompt-form {
  padding: 1rem;
  color: #fff;
}
.form-label {
  text-align: left;
  display: block;
  width: 100%;
  margin-top: 1rem;
}
.form-control, .form-select {
  border-color: #495057;
}
.form-control:focus, .form-select:focus {
  background-color: #212529;
  border-color: #0d6efd;
  color: #fff;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
.form-check-input:checked {
  background-color: #0d6efd;
  border-color: #0d6efd;
}
.form-check-label {
  color: #fff;
}
::placeholder {
    color: white; /* Hoặc bất kỳ màu nào bạn muốn */
    opacity: 0.4; /* Đảm bảo màu rõ ràng, có thể chỉnh thấp nếu muốn mờ */
  }
.toast {
  background-color: #343a40;
  color: white;
}
.toast-header {
  background-color: #212529;
  color: white;
}
.toast-header .btn-close {
  filter: invert(1) grayscale(100%) brightness(200%);
}
</style> 