import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { UserPage } from './pages/UserPage/UserPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { RatingPage } from './pages/RatingPage/RatingPage';
import { StorePage } from './pages/StorePage/StorePage';
import { useEffect } from 'react';

export const App = () => {
  useEffect(() => {
    localStorage.setItem('userId', '1');
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path="/users/:userId"
            element={<UserPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/rating"
            element={<RatingPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/store"
            element={<StorePage />}
            errorElement={<ErrorPage />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
