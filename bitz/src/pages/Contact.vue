<template>
  <div class="contact bg-background text-text-primary font-sans">
    <!-- Hero Section -->
    <section class="bg-primary text-white pt-32 pb-20 text-center relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container-custom mx-auto px-6 relative z-10" v-scroll-animate>
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
          <div v-scroll-animate>
            <h2 class="text-2xl font-bold text-primary mb-2">Request Consultation</h2>
            <p class="text-text-secondary mb-8">Fill out the form below and we'll get back to you within 48 hours.</p>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Name <span class="text-red-500">*</span>
                  </label>
                  <input 
                    v-model="form.name" 
                    type="text" 
                    placeholder="Full name" 
                    class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                    required 
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Organization <span class="text-red-500">*</span>
                  </label>
                  <input 
                    v-model="form.organization" 
                    type="text" 
                    placeholder="Organization name" 
                    class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Email <span class="text-red-500">*</span>
                </label>
                <input 
                  v-model="form.email" 
                  type="email" 
                  placeholder="email@example.com" 
                  class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                  required 
                />
              </div>
              
              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Project Description <span class="text-red-500">*</span>
                </label>
                <textarea 
                  v-model="form.description" 
                  rows="5" 
                  placeholder="Describe your project requirements, challenges, and objectives..."
                  class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Phone <span class="text-slate-300 font-normal">(Optional)</span>
                  </label>
                  <input 
                    v-model="form.phone" 
                    type="tel" 
                    placeholder="+254..." 
                    class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors"
                  />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                    Budget Range <span class="text-slate-300 font-normal">(Optional)</span>
                  </label>
                  <select 
                    v-model="form.budget" 
                    class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                  >
                    <option value="">Select range</option>
                    <option value="<25k">Under $25k</option>
                    <option value="25k-100k">$25k - $100k</option>
                    <option value="100k-500k">$100k - $500k</option>
                    <option value=">500k">Over $500k</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Timeline <span class="text-slate-300 font-normal">(Optional)</span>
                </label>
                <select 
                  v-model="form.timeline" 
                  class="w-full px-4 py-3 border border-slate-200 rounded-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-colors bg-white"
                >
                  <option value="">Select timeline</option>
                  <option value="<3months">Less than 3 months</option>
                  <option value="3-6months">3 - 6 months</option>
                  <option value="6-12months">6 - 12 months</option>
                  <option value=">12months">Over 12 months</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                :disabled="isSubmitting"
                class="w-full md:w-auto px-8 py-4 bg-primary text-white font-bold rounded-sm hover:bg-navy-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <Loader2 v-if="isSubmitting" class="animate-spin" :size="18" />
                <Send v-else :size="18" />
                {{ isSubmitting ? 'Sending...' : 'Request Consultation' }}
              </button>

              <p class="text-xs text-text-secondary">
                By submitting this form, you agree to our privacy policy. All inquiries are confidential.
              </p>
            </form>
          </div>

          <!-- Info Side -->
          <div class="space-y-12" v-scroll-animate>
            <div>
              <h2 class="text-2xl font-bold text-primary mb-6">Direct Contact</h2>
              <div class="space-y-6">
                <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-sm border border-slate-100">
                  <div class="text-secondary mt-1"><Mail :size="20" /></div>
                  <div>
                    <h4 class="font-bold text-primary mb-1">Email</h4>
                    <a href="mailto:info@bitz-itc.com" class="text-text-secondary hover:text-secondary underline">info@bitz-itc.com</a>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-sm border border-slate-100">
                  <div class="text-secondary mt-1"><MapPin :size="20" /></div>
                  <div>
                    <h4 class="font-bold text-primary mb-1">Address</h4>
                    <p class="text-text-secondary">
                      Prime Cartons, Dongkung building<br />
                      next to Nice & Lovely along Mombasa Road<br />
                      Nairobi, Kenya
                    </p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-slate-50 rounded-sm border border-slate-100">
                  <div class="text-secondary mt-1"><Clock :size="20" /></div>
                  <div>
                    <h4 class="font-bold text-primary mb-1">Response Time</h4>
                    <p class="text-text-secondary">We respond to all inquiries within 24-48 hours.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-primary mb-6">Trust Indicators</h2>
              <div class="grid grid-cols-2 gap-4">
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm text-center hover:border-secondary transition-colors">
                  <Globe class="text-secondary mx-auto mb-2" :size="24" />
                  <div class="text-2xl font-bold text-primary mb-1">5</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Countries</div>
                </div>
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm text-center hover:border-secondary transition-colors">
                  <Award class="text-secondary mx-auto mb-2" :size="24" />
                  <div class="text-lg font-bold text-primary mb-1">UNICEF</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Venture Fund</div>
                </div>
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm text-center hover:border-secondary transition-colors">
                  <Clock class="text-secondary mx-auto mb-2" :size="24" />
                  <div class="text-2xl font-bold text-primary mb-1">24h</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Response</div>
                </div>
                <div class="p-6 border border-slate-100 bg-slate-50 rounded-sm text-center hover:border-secondary transition-colors">
                  <Shield class="text-secondary mx-auto mb-2" :size="24" />
                  <div class="text-lg font-bold text-primary mb-1">100%</div>
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Confidential</div>
                </div>
              </div>
            </div>

            <!-- FAQ -->
            <div>
              <h2 class="text-2xl font-bold text-primary mb-6">Common Questions</h2>
              <div class="space-y-4">
                <div v-for="faq in faqs" :key="faq.question" class="border border-slate-200 rounded-sm">
                  <button 
                    @click="toggleFaq(faq.question)"
                    class="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                  >
                    <span class="font-bold text-primary text-sm">{{ faq.question }}</span>
                    <ChevronDown 
                      class="text-slate-400 transition-transform" 
                      :size="18"
                      :class="{ 'rotate-180': openFaq === faq.question }"
                    />
                  </button>
                  <div 
                    v-show="openFaq === faq.question"
                    class="px-4 pb-4 text-sm text-text-secondary"
                  >
                    {{ faq.answer }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Modal -->
    <Transition name="fade">
      <div v-if="showSuccess" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div class="bg-white rounded-sm p-8 max-w-md w-full text-center">
          <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle class="text-green-600" :size="32" />
          </div>
          <h3 class="text-2xl font-bold text-primary mb-2">Thank You</h3>
          <p class="text-text-secondary mb-6">We have received your request and will respond within 48 hours.</p>
          <button 
            @click="showSuccess = false"
            class="px-6 py-3 bg-primary text-white font-bold rounded-sm hover:bg-navy-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { 
  Mail, 
  MapPin, 
  Clock,
  Globe,
  Award,
  Shield,
  Send,
  Loader2,
  CheckCircle,
  ChevronDown
} from 'lucide-vue-next'
import { vScrollAnimate } from '@/composables/useScrollAnimation'

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
const showSuccess = ref(false)
const openFaq = ref(null)

const faqs = [
  {
    question: 'What is your typical project timeline?',
    answer: 'Project timelines vary based on scope. A digital assessment typically takes 4-6 weeks, while full system implementation can range from 3-12 months. We provide detailed timelines during our initial consultation.'
  },
  {
    question: 'Do you work with international organizations?',
    answer: 'Yes, we work with international development organizations, NGOs, and donor-funded programs. We have experience meeting donor reporting requirements and compliance standards.'
  },
  {
    question: 'What geographic regions do you serve?',
    answer: 'We currently operate in Kenya, Uganda, Tanzania, Lesotho, and Somalia. We are open to discussing projects in other African countries based on requirements.'
  },
  {
    question: 'How do you handle data security?',
    answer: 'We implement enterprise-grade security measures including encryption, access controls, and regular audits. We comply with data protection regulations and can provide detailed security documentation upon request.'
  }
]

const toggleFaq = (question) => {
  openFaq.value = openFaq.value === question ? null : question
}

const submitForm = async () => {
  isSubmitting.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  showSuccess.value = true
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
