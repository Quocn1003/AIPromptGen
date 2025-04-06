<template>
  <div class="prompt-form">
    <div class="mb-3">
      <label for="nameInput" class="form-label">Nhập tên của bạn:</label>
      <input 
        class="form-control bg-dark text-light" 
        id="nameInput" 
        rows="4" 
        v-model="name"
        placeholder="Nhập tên(nên dùng tiếng Việt không dấu tránh lỗi font)"
      ></input>
      <label for="jobInput" class="form-label">Nghề nghiệp:</label>
      <input 
        class="form-control bg-dark text-light" 
        id="jobInput" 
        rows="4" 
        v-model="job"
        placeholder="Nhập nghề nghiệp(nên dùng tiếng Việt không dấu tránh lỗi font)"
      ></input>
      <label for="characterInput" class="form-label">Mô tả nhân vật:</label>
      <textarea 
        class="form-control bg-dark text-light" 
        id="characterInput" 
        rows="4" 
        v-model="character"
        placeholder="Mô tả về quần áo, kiểu tóc, trang sức, đồng hồ,...(có thể dùng tiếng Việt có dấu)"
      ></textarea>
      <label for="accessoryInput" class="form-label">Phụ kiện xung quanh</label>
      <textarea 
        class="form-control bg-dark text-light" 
        id="accessoryInput" 
        rows="4" 
        v-model="accessories"
        placeholder="Mô tả các phụ kiện xung quanh(có thể dùng tiếng Việt)"
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
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const job = ref('')
const character = ref('')
const accessories = ref('')

const generatedPrompt = ref('')

const generatePrompt = () => {
  // Logic tạo prompt dựa trên input và options
  
  generatedPrompt.value = `
  Create a photorealistic of a full-figure toy model of figure in the image below displayed in plastic blister packaging.   On the top of the toy packaging, the name of the toy is written as "${name.value}", and works as a "${job.value}" so it is on 2 different lines. The character stands in the middle of the packaging, smiling confidently. Around the character are typical accessories related to the profession such as: [${character.value}]. The character is wearing [${accessories.value}]. The box packaging design is visually appealing and suitable for modern office lifestyle and working culture of youth.
  Photorealistic rendering, studio lighting, clear focus on the packaging and figure.
  `
}

const copyPrompt = () => {
  navigator.clipboard.writeText(generatedPrompt.value)
}
</script>

<style scoped>
.prompt-form {
  padding: 1rem;
  color: #fff;
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
</style> 