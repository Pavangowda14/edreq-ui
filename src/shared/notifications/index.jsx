import React, { createContext, useContext } from 'react';
import { toast } from 'react-toastify';

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const addToast = (message, type, options = {}) => {
    if (type && type === 'success') toast.success(message, options);
    else if (type && type === 'error') toast.error(message, options);
  };

  const contextValue = {
    addToast,
  };

  return <ToastContext.Provider value={contextValue}>{children}</ToastContext.Provider>;
};