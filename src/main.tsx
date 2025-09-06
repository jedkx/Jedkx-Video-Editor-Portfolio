import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/globals.css'
import { GSAPAnimations } from './utils/gsap'

// GSAP animasyonlarını başlat
document.addEventListener('DOMContentLoaded', () => {
  GSAPAnimations.init();
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)