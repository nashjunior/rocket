import React, { useCallback } from 'react';
import { Container } from './styles';
import { ToastMessage, useToast } from '../../hooks/Toast';
import Toast from './Toast';
import { useTransition } from 'react-spring';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransition = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: '-120%' },
      enter: { right: '0%' },
      leave: { right: '-120%' },
    },
  );
  return (
    <Container>
      {messagesWithTransition.map(({ item, key, props }) => {
        return <Toast key={key} message={item} style={props} />;
      })}
    </Container>
  );
};

export default ToastContainer;
