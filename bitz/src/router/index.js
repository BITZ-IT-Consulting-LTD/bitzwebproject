import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import About from "@/pages/About.vue"
import Services from "@/pages/Services.vue"
import Sectors from "@/pages/Sectors.vue"
import Products from "@/pages/Products.vue"
import Projects from "@/pages/Projects.vue"
import Contact from "@/pages/Contact.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "BITZ - Technology Systems for Public Institutions",
      description:
        "We design, build, and operate digital infrastructure for governments, health systems, and financial institutions across Africa.",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About Us - BITZ",
      description:
        "BITZ is a technology consulting firm. We design, build, and operate digital systems for public institutions and enterprises in Africa.",
    },
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
    meta: {
      title: "Our Services - BITZ",
      description:
        "AI and Automation, Data Infrastructure, Cloud and Operations, Digital Assessment. Technology services for operational outcomes.",
    },
  },
  {
    path: "/sectors",
    name: "Sectors",
    component: Sectors,
    meta: {
      title: "Solutions by Sector - BITZ",
      description:
        "Sector-specific solutions for Government, Healthcare, Financial Services, and International Development.",
    },
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
    meta: {
      title: "Our Services - BITZ",
      description:
        "Comprehensive technology services including consulting, software development, and AI solutions.",
    },
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    meta: {
      title: "Case Studies - BITZ",
      description:
        "Documented capability through factual evidence. Child Helpline Systems, OPENHMIS, Tower SACCO.",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact Us - BITZ",
      description: "Discuss a project or engagement. We respond within 48 hours.",
    },
  },
  // Redirect old routes
  {
    path: "/our-vision",
    redirect: "/about"
  },
  {
    path: "/our-team",
    redirect: "/about"
  },
  // 404 page
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"),
    meta: {
      title: "Page Not Found - BITZ",
      description: "The page you are looking for could not be found.",
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: "smooth" }
    }
  },
})

// Global navigation guards
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // Update meta description
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", to.meta.description)
    }
  }

  next()
})

export default router
