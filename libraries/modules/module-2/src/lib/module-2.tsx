import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from '@nx-vite-module-federation-complete-example/shared-ui';

export function Module2() {
  const Home = lazy(() => import('./pages/home'));
  const Page1 = lazy(() => import('./pages/page-1'));
  const Page2 = lazy(() => import('./pages/page-2'));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="module-1-page-1" element={<Page1 />} />
        <Route path="module-1-page-2" element={<Page2 />} />
      </Routes>
    </Suspense>
  );
}

export default Module2;
