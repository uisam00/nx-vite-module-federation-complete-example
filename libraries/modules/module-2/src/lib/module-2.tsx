import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from '@nx-vite-module-federation-complete-example/shared-ui';

export function Module2() {
  const Home = lazy(() => import('./pages/home'));
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default Module2;
