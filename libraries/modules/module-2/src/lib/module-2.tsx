import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Loading } from '@shared-ui';

export function Module2() {
  const Home = lazy(() => import('./pages/home'));
  const Page2 = lazy(() => import('./pages/Page2'));
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page-2" element={<Page2 />} />
      </Routes>
    </Suspense>
  );
}

export default Module2;
