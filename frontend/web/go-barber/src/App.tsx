import React, { useCallback } from 'react';
import SignIn from './pages/Signin';
import GlobalStyle from './styles/global';
import { AuthProvider } from './context/AuthContext';

const App: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <SignIn />
      </AuthProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
