import { Route, Routes } from 'react-router-dom';
import {
  Section1,
  Section2,
} from '@nx-vite-module-federation-complete-example/moduleLoader';
import { lazy, Suspense } from 'react';
import { Loading } from '@nx-vite-module-federation-complete-example/shared-ui';

export function App() {
  const Home = lazy(() => import('./pages/home'));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* federation sections routes */}
        <Route path="/section-1/*" element={<Section1 />} />
        <Route path="/section-2/*" element={<Section2 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
