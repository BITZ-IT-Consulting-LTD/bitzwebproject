import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options
  const elements = ref([])
  const observer = ref(null)

  const observe = (el) => {
    if (el && observer.value) {
      observer.value.observe(el)
      elements.value.push(el)
    }
  }

  const unobserve = (el) => {
    if (el && observer.value) {
      observer.value.unobserve(el)
      elements.value = elements.value.filter(e => e !== el)
    }
  }

  onMounted(() => {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          // Optionally unobserve after animation
          // observer.value.unobserve(entry.target)
        }
      })
    }, {
      threshold,
      rootMargin
    })
  })

  onUnmounted(() => {
    if (observer.value) {
      observer.value.disconnect()
    }
  })

  return {
    observe,
    unobserve
  }
}

// Directive for scroll animation
export const vScrollAnimate = {
  mounted(el, binding) {
    const options = binding.value || {}
    const threshold = options.threshold || 0.1
    const rootMargin = options.rootMargin || '0px 0px -50px 0px'
    
    el.classList.add('scroll-animate')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          const animation = entry.target.dataset.animation || 'fadeInUp'
          entry.target.style.animation = `${animation} 0.6s ease-out forwards`
          observer.unobserve(entry.target)
        }
      })
    }, { threshold, rootMargin })
    
    el._observer = observer
    observer.observe(el)
  },
  unmounted(el) {
    if (el._observer) {
      el._observer.disconnect()
    }
  }
}
