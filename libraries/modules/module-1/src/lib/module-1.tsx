import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from '@shared-ui';

export function Module1() {
  const Home = lazy(() => import('./pages/home'));

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="" element={<Home />} />
      </Routes>
    </Suspense>
  );
}

export default Module1;
