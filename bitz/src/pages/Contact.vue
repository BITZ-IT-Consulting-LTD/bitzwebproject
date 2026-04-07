<template>
  <div class="contact bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20 text-center">
      <div class="container-custom mx-auto px-6">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Contact us</h1>
        <p class="text-xl text-slate-300 max-w-2xl mx-auto">
          Discuss a project or engagement. We respond within 48 hours.
        </p>
      </div>
    </section>

    <!-- Contact Form & Info -->
    <section class="py-24 bg-white">
      <div class="container-custom mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <!-- Form Side -->
          <div>
            <h2 class="text-2xl font-bold text-primary mb-8">Request Consultation</h2>
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Name</label>
                  <input v-model="form.name" type="text" placeholder="Full name" class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary outline-none transition-colors" required />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Organization</label>
                  <input v-model="form.organization" type="text" placeholder="Organization name" class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary outline-none transition-colors" required />
                </div>
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Email</label>
                <input v-model="form.email" type="email" placeholder="email@example.com" class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary outline-none transition-colors" required />
              </div>
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Project Description</label>
                <textarea v-model="form.description" rows="5" placeholder="Outline your requirements..." class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary outline-none transition-colors" required></textarea>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Phone (Optional)</label>
                  <input v-model="form.phone" type="tel" placeholder="+254..." class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary outline-none transition-colors" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Budget Range (Optional)</label>
                  <select v-model="form.budget" class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary outline-none transition-colors bg-white">
                    <option value="">Select range</option>
                    <option value="<10k">Under $10k</option>
                    <option value="10k-50k">$10k - $50k</option>
                    <option value="50k-200k">$50k - $200k</option>
                    <option value=">200k">Over $200k</option>
                  </select>
                </div>
              </div>
              <button type="submit" :disabled="isSubmitting" class="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded hover:bg-navy-800 transition-all disabled:opacity-50">
                {{ isSubmitting ? 'Sending...' : 'Request Consultation' }}
              </button>
            </form>
          </div>

          <!-- Info Side -->
          <div class="space-y-16">
            <div>
              <h2 class="text-2xl font-bold text-primary mb-8">Direct Contact</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4">
                  <div class="text-secondary mt-1"><Mail :size="20" /></div>
                  <div>
                    <h4 class="font-bold text-primary mb-1">Email</h4>
                    <a href="mailto:info@bitz-itc.com" class="text-text-secondary hover:text-secondary underline">info@bitz-itc.com</a>
                  </div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="text-secondary mt-1"><MapPin :size="20" /></div>
                  <div>
                    <h4 class="font-bold text-primary mb-1">Address</h4>
                    <p class="text-text-secondary">
                      Prime Cartons, Dongkung building next to Nice & Lovely along Mombasa Road, Nairobi, Kenya
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-primary mb-8">Trust Indicators</h2>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm">
                  <div class="text-2xl font-bold text-primary mb-1">5 Countries</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Systems Deployed</div>
                </div>
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm">
                  <div class="text-2xl font-bold text-primary mb-1">UNICEF</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Venture Fund Recipient</div>
                </div>
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm">
                  <div class="text-2xl font-bold text-primary mb-1">24–48h</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Response Time</div>
                </div>
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm">
                  <div class="text-2xl font-bold text-primary mb-1">100%</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Confidential Inquiries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Mail, MapPin } from 'lucide-vue-next'

const form = ref({
  name: '',
  organization: '',
  email: '',
  description: '',
  phone: '',
  budget: '',
  timeline: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate submission
  await new Promise(resolve => setTimeout(resolve, 1000))
  alert('Thank you. We have received your request and will respond within 48 hours.')
  form.value = {
    name: '',
    organization: '',
    email: '',
    description: '',
    phone: '',
    budget: '',
    timeline: ''
  }
  isSubmitting.value = false
}
</script>

<style scoped>
.container-custom {
  max-width: 1200px;
}
</style>
