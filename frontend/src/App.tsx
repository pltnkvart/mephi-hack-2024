import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { UserPage } from './pages/UserPage/UserPage';
import { ErrorPage } from './pages/ErrorPage/ErrorPage';
import { RatingPage } from './pages/RatingPage/RatingPage';
import { StorePage } from './pages/StorePage/StorePage';
import { useEffect } from 'react';
import { TeamPage } from './pages/TeamPage/TeamPage';
import { NetworkPage } from './pages/NetworkPage/NetworkPage';

export const App = () => {
  useEffect(() => {
    localStorage.setItem('userId', '1');
    localStorage.setItem('teamId', '1');
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
            path="/network"
            element={<NetworkPage />}
            errorElement={<ErrorPage />}
          />
          <Route
            path="/team/:teamId"
            element={<TeamPage />}
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
