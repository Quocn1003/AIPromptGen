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
  Create a highly detailed miniature diorama scene in dollhouse style. . Include a full-body toy figurine of the person in the photo, keeping their real face intact and realistic. The figure must be scaled appropriately and fully visible within the environment. The entire room setting should represent the actual working environment of the person’s profession — not just a generic living room. For example: if their job involves a clinic, recreate a tiny dental office with dental chair, instruments, and equipment; if they work in media, create a mini TV studio with camera rigs, lights, and microphones. For professions without a fixed workspace (e.g., freelancer, artist), a personalized home studio can be used, but the furniture and items must still strongly reflect the tools and feel of that job. The furniture, machines, accessories, wall decor, flooring, lighting, and even the layout should be custom tailored to match the person’s actual profession. The toy figure should wear profession-specific clothing, shoes, and accessories, such as: [${character.value}], with items like [${accessories.value}]. The image should be captured from a top-down, wide-angle view showing the entire dollhouse clearly placed on a real wooden table or floor — making it unmistakably a handcrafted toy model. Include a miniature nameplate on the floor or wall that fits the theme — styled in a way that suits the profession (e.g., a hospital name badge style for medical fields, microphone name tag for media, etc.). The nameplate should read: ${name.value} ${job.value}. Use warm lighting, miniature proportions, and handcrafted textures to emphasize the cozy, playful, and collectible nature of the scene.
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