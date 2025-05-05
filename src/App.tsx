import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from './layouts/MainLayout';

// Pages - Using React.lazy for code splitting
const HomePage = React.lazy(() => import('./pages/HomePage'));
const LifecyclePage = React.lazy(() => import('./pages/LifecyclePage'));
const MaterialsPage = React.lazy(() => import('./pages/MaterialsPage'));
const ImpactPage = React.lazy(() => import('./pages/ImpactPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

// Components
import Loading from './components/common/Loading';

function App() {
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="lifecycle" element={<LifecyclePage />} />
            <Route path="materials" element={<MaterialsPage />} />
            <Route path="impact" element={<ImpactPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;