import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import LogoShowcase from './components/common/LogoShowcase';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/logo" element={<LogoShowcase />} />
    </Routes>
  </BrowserRouter>
);
