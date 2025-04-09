import { Route, Routes } from 'react-router-dom';
import {
  Section1,
  Section2,
} from '@nx-vite-module-federation-complete-example/moduleLoader';
import { lazy } from 'react';

export function App() {
  const Home = lazy(() => import('./pages/home'));

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* federation sections routes */}
      <Route path="/section-1/*" element={<Section1 />} />
      <Route path="/section-2/*" element={<Section2 />} />
    </Routes>
  );
}

export default App;
