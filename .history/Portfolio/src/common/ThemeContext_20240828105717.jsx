import React, {
  Children,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

const ThemeContext = createContext;

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ Children }) => {
  const [theme, seTheme] = useState(
    () => localStorage.getItem('theme') || 'light',
  );
};
