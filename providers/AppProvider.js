"use client"
import React, { useState } from 'react';
import AppContext from '../context/AppContext';
import {SSRProvider, Provider, defaultTheme} from '@adobe/react-spectrum';

/**
 * Provide any application specific data
 */
const AppProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('dark');
  const [navOpen, setNavOpen] = useState(false);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    document.getElementById('app-html').classList.toggle('spectrum--light');
    document.getElementById('app-html').classList.toggle('spectrum--darkest');
  };

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavOpen(false);
  };

  const value = {
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    navOpen,
    closeNav,
    toggleNav,
  };

  return (
    <SSRProvider>
      <Provider colorScheme={colorScheme} theme={defaultTheme}>
        <AppContext.Provider value={value}>
          {children}
        </AppContext.Provider>
      </Provider>
    </SSRProvider>
  );
};

export default AppProvider;
