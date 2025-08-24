import { Route, Routes } from 'react-router-dom';
import {
  Module1,
  Module2,
} from '@moduleLoader';
import { lazy, Suspense } from 'react';
import { Loading } from '@shared-ui';

export function App() {
  const Home = lazy(() => import('./pages/home'));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* federation modules routes */}
        <Route path="/module-1/*" element={<Module1 />} />
        <Route path="/module-2/*" element={<Module2 />} />
      </Routes>
    </Suspense>
  );
}

export default App;
