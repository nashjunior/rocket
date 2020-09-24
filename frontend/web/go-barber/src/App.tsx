import React, { useCallback } from 'react';
import SignIn from './pages/Signin';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/Auth';
import ToastContainer from './components/ToastContainer';
import { ToastProvider } from './hooks/Toast';
import AppProvider from './hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <Routes />
      </AppProvider>
      <GlobalStyle />
    </Router>
  );
};

export default App;
