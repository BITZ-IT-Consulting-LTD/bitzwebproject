## SYSTEM INSTRUCTION

You are a senior product designer and frontend engineer.

Generate:
- Clean, enterprise-grade UI
- Structured layout (not generic templates)
- Production-ready React (Next.js + Tailwind)

Do NOT:
- Use vague sections
- Use placeholder lorem ipsum
- Overuse marketing buzzwords

Ensure:
- Strong hierarchy
- Clear spacing
- Professional typography
- Conversion-focused design

---

# 🎨 GLOBAL DESIGN SYSTEM

## DESIGN PRINCIPLES

- Editorial, not decorative
- High whitespace
- Structured grid
- Information density over visual noise

---

## COLOR SYSTEM

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Deep Navy | `#0F172A` | Headers, primary actions |
| Secondary | Slate Blue | `#3B82F6` | Links, accents |
| Background | Off-White | `#F8FAFC` | Page background |
| Surface | Pure White | `#FFFFFF` | Cards, sections |
| Text Primary | Charcoal | `#1E293B` | Body text |
| Text Secondary | Slate | `#64748B` | Captions, labels |

---

## TYPOGRAPHY

**Font:** Inter

| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 40px / 2.5rem | 600 | 1.2 |
| H2 | 32px / 2rem | 600 | 1.2 |
| H3 | 20px / 1.25rem | 600 | 1.3 |
| Body | 16px / 1rem | 400 | 1.6 |
| Caption | 14px / 0.875rem | 400 | 1.5 |
| Button | 14px / 0.875rem | 500 | 1 |

---

## SPACING

| Token | Value | Usage |
|-------|-------|-------|
| Section Padding | 80px / 5rem | Between major sections |
| Container Max Width | 1200px / 75rem | Content wrapper |
| Grid Gap | 32px / 2rem | Between grid items |
| Card Padding | 24px / 1.5rem | Internal spacing |

---

## COMPONENTS

### Buttons

**Primary**
- Background: `#0F172A`
- Text: `#FFFFFF`
- Padding: 12px 24px
- Border Radius: 4px
- Hover: `#1E293B`

**Secondary**
- Background: transparent
- Border: 1px solid `#0F172A`
- Text: `#0F172A`
- Padding: 12px 24px
- Border Radius: 4px

### Cards

- Background: `#FFFFFF`
- Border: 1px solid `#E2E8F0`
- Border Radius: 4px
- Padding: 24px
- No shadow (flat design)

---

## LAYOUT PRINCIPLES

**Grid:** 12-column
**Gutters:** 32px
**Max width:** 1200px
**Mobile first:** Yes

**Section structure:**
- Header with minimal navigation
- Large whitespace above fold
- Content organized in clear hierarchies
- CTAs placed at logical decision points

---

## COPY STYLE

- Short sentences
- Active voice
- No adjectives without purpose
- Factual over promotional

**Instead of:** "We provide innovative solutions"
**Write:** "We design and build systems"

---

## CREDIBILITY PRESENTATION

Display real evidence:
- UNICEF Venture Fund (badge)
- Country list: Kenya, Uganda, Tanzania, Lesotho, Somalia
- System names: Child Helpline (116), OPENHMIS
- Numbers: 10,000+ calls, 5 countries, 50,000+ records

Avoid:
- Superlatives
- Unverifiable claims
- Decorative elements without function

---

## FRONTEND STACK

- Next.js 14 (App Router)
- Tailwind CSS
- React functional components
- Lucide React icons
- Inter font

Code requirements:
- Clean and readable
- Modular components
- TypeScript preferred
- Accessible (ARIA, keyboard nav)
