import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import Homepage from './pages/Homepage';

import { UserProvider } from './contexts/UserContext';

import useToken from './hooks/useToken';
import About from './pages/About';
import Settings from './pages/Settings';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/homepage"
              element={
                <ProtectedRouteGuard>
                  <Homepage />
                </ProtectedRouteGuard>
              }
            />
            <Route path="/about-us"
              element={
                <ProtectedRouteGuard>
                  <About />
                </ProtectedRouteGuard>
              }
            />
            <Route path="/settings"
              element={
                <ProtectedRouteGuard>
                  <Settings />
                </ProtectedRouteGuard>
              }
            />
            <Route path="/favorites"
              element={
                <ProtectedRouteGuard>
                  <Favorites />
                </ProtectedRouteGuard>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>
    {children}
  </>;
}
