import React, { useCallback } from 'react';
import SignIn from './pages/Signin';
import GlobalStyle from './styles/global';
import { AuthProvider } from './hooks/Auth';
import ToastContainer from './components/ToastContainer';
import { ToastProvider } from './hooks/Toast';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
