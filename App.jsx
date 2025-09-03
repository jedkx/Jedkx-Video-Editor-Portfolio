import React from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './src/pages/Home.jsx';
import NotFound from './src/pages/NotFound.jsx';

export default function App() {
  return (
    <Theme appearance="dark" radius="large" scaling="100%">
      <Router>
        <main className="min-h-screen bg-black text-slate-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            newestOnTop
            closeOnClick
            pauseOnHover
            theme="dark"
            toastStyle={{
              backgroundColor: '#000000',
              color: '#f1f5f9',
              border: '1px solid #475569'
            }}
          />
        </main>
      </Router>
    </Theme>
  );
}