// import SignIn from '../Auth/SignIn/SIgnIn';
import { ThemeProvider } from 'styled-components';
import theme from '../../theme/theme';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
// import SignUp from '../Auth/SignUp/SignUp';
function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const unauthorizedRoutes= ['sign-in', 'sign-up', 'password-recovery'];
  useEffect(() => {
    const auth = localStorage.getItem('credits');
    if (!auth && !unauthorizedRoutes.includes(pathname.substring(1))) {
      navigate('sign-in');
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Outlet />
      </div>
    </ThemeProvider>
  );
}

export default App;
