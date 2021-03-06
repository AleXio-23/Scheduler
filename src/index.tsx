import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Root/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/root';
import SignIn from './components/Auth/SignIn/SIgnIn';
import SignUp from './components/Auth/SignUp/SignUp';
import PasswordRecovery from './components/Auth/PasswordRecovery/PasswordRecovery';

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />} >
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="password-recovery" element={<PasswordRecovery />} />
            </Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
