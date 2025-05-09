<template>
  <div class="prompt-form">
    <div class="mb-3">
      
      <label for="cameraBrand" class="form-label">Hãng máy ảnh:</label>
      <select 
        class="form-select bg-dark text-light" 
        id="cameraBrand" 
        v-model="cameraBrand"
      >
        <option value="">Chọn hãng máy ảnh</option>
        <option v-for="brand in cameraBrands" :key="brand" :value="brand">
          {{ brand }}
        </option>
      </select>
      <label for="cameraNameInput" class="form-label">Tên máy ảnh:</label>
      <input 
        class="form-control bg-dark text-light" 
        id="cameraNameInput" 
        rows="4" 
        v-model="cameraName"
        placeholder="vd: Canon RP, Nikon D5600, Sony A74,..."
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
      <label for="characterInput" class="form-label">Mô tả quần áo nhân vật:</label>
      <textarea 
        class="form-control bg-dark text-light" 
        id="characterInput" 
        rows="4" 
        v-model="character"
        placeholder="Mô tả về quần áo, kiểu tóc, trang sức, đồng hồ,...(có thể dùng tiếng Việt có dấu)"
      ></textarea>
      <label for="accessoryInput" class="form-label">Phụ kiện ở trên bàn:</label>
      <textarea 
        class="form-control bg-dark text-light" 
        id="accessoryInput" 
        rows="4" 
        v-model="accessories"
        placeholder="Mô tả các phụ kiện trên bàn(vd: Điện thoại, cốc nước, bánh ngọt,...)"
      ></textarea>
      <label for="studioNameInput" class="form-label">Tên Studio:</label>
      <input 
        class="form-control bg-dark text-light" 
        id="studioNameInput" 
        rows="4" 
        v-model="studioName"
        placeholder="Nhập tên studio (ngắn gọn, nên dưới 10 ký tự)"
      >
      <label for="startYearInput" class="form-label">Năm bắt đầu:</label>
      <input 
        class="form-control bg-dark text-light" 
        id="startYearInput" 
        rows="4" 
        v-model="startYear"
        placeholder="Nhập năm bắt đầu (vd: 2020)"
      >
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

const cameraName = ref('')
const cameraBrand = ref('')
const gender = ref('')
const character = ref('')
const accessories = ref('')
const studioName = ref('')
const startYear = ref('')
const generatedPrompt = ref('')
const toastMessage = ref('')

const cameraBrands = [
  'Canon',
  'Nikon',
  'Sony',
  'Fujifilm',
  'Panasonic',
  'Olympus',
  'Leica',
  'Hasselblad'
]

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
   Create a minimalist isometric 3D illustration of a cozy photographer workspace hidden inside a [${cameraBrand.value}] camera. The exterior features soft curves, classic details and nostalgic elements, use the [${cameraName.value}] colour scheme. Inside the [${cameraBrand.value}] camera, a young [${gender.value}] wearing [${character.value}] sits in front of the computer editing a photo of a female model at the beach in an editing software,sitting position can see the character's face. The computer table should have an orange cup of coffee and a bag of chips and [${accessories.value}]. Under the table should be 2 stacks of magazines .Next to him is a vintage lamp in a shape of a old TV station lighting that puts him in soft, diffused lighting. Floating shelves of old photo cameras and video cameras and a small landscape photos all framed line the walls, while a neon sign that says [${studioName.value}] and under it "Since [${startYear.value}]" adds a light glow to what's nearby. The whole scene is done in a modern, friendly style with soft shadows, subtle perspective and a cozy futuristic vibe - perfect for fans of digital art and nostalgia. 
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