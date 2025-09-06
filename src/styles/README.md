# CSS Organization Structure

This project uses a **semantic CSS class approach** for better maintainability and organization.

## 📁 File Structure

```
src/styles/
├── globals.css          # Main global styles & imports
├── index.css           # Style index for easy imports
└── components/         # Component-specific styles
    ├── buttons.css     # Button styles & hover effects
    ├── header.css      # Header navigation & logo
    ├── hero.css        # Hero section & CTA elements
    ├── portfolio.css   # Portfolio grid & video cards
    ├── video.css       # Video component interactions
    ├── animations.css  # Animations & transitions
    └── layout.css      # Layout utilities & grids
```

## 🎨 Component Categories

### 1. **buttons.css**
- `.btn-primary`, `.btn-secondary` - Main buttons
- `.btn-hero-primary`, `.btn-hero-secondary` - Hero CTAs
- `.btn-nav` - Navigation buttons
- Hover effects and animations

### 2. **header.css**
- `.header-main` - Main header container
- `.nav-container`, `.nav-content` - Navigation layout
- `.logo-container`, `.logo-icon`, `.logo-text` - Logo elements
- `.mobile-menu-*` - Mobile navigation

### 3. **hero.css**
- `.hero-section` - Main hero container
- `.hero-content`, `.hero-headline` - Content areas
- `.hero-cta-*` - Call-to-action buttons
- `.hero-ambient-*` - Background animations

### 4. **portfolio.css**
- `.portfolio-section` - Main portfolio area
- `.video-card`, `.video-thumbnail` - Video display
- `.portfolio-filters`, `.filter-button` - Category filters
- `.video-overlay`, `.video-play-button` - Interactions

### 5. **video.css**
- Video player interactions
- Modal effects
- Thumbnail hover states

### 6. **animations.css**
- Scroll-triggered animations
- Hover effects
- Loading states

### 7. **layout.css**
- Grid systems
- Container utilities
- Responsive breakpoints

## 🚀 Semantic Class Usage

### Instead of Tailwind utility classes:
```jsx
// OLD: Utility classes
<div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md">

// NEW: Semantic classes
<div className="header-main scrolled">
```

### Benefits:
- **🎯 Meaningful names**: `.hero-cta-primary` vs `.bg-red-500 px-10 py-4`
- **🔧 Easy maintenance**: Change all buttons in one place
- **📱 Responsive**: Built-in breakpoints
- **🎨 Consistent design**: Centralized styling
- **🧹 Clean JSX**: Readable component code

## 🎯 Class Naming Convention

```
.component-element-modifier
.hero-cta-primary          # Hero section, CTA button, primary style
.video-card-loading        # Video component, card element, loading state
.nav-item-active           # Navigation, item element, active state
```

## 📱 Responsive Design

All components include responsive breakpoints:
- Mobile: `@media (max-width: 640px)`
- Tablet: `@media (max-width: 768px)` 
- Desktop: `@media (max-width: 1024px)`

## 🎨 Design System Integration

Based on **Flexxi.design** and **Federico Menegoi** approaches:
- Minimal color palette
- Smooth transitions  
- Cinematic effects
- Professional interactions

## 💡 Usage Examples

```jsx
// Header component
<header className="header-main scrolled">
  <div className="nav-container">
    <div className="logo-container">
      <span className="logo-text">JEDKX</span>
    </div>
  </div>
</header>

// Hero section
<section className="hero-section">
  <div className="hero-content">
    <h1 className="hero-headline">Title</h1>
    <button className="hero-cta-primary">CTA</button>
  </div>
</section>

// Portfolio grid
<div className="portfolio-section">
  <div className="video-card">
    <div className="video-thumbnail">
      <div className="video-overlay">
        <button className="video-play-button">Play</button>
      </div>
    </div>
  </div>
</div>
```
