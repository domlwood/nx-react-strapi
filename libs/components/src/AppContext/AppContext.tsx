import { createContext, useContext, useMemo, useState } from 'react';
import { Theme } from '@portal/models';

interface AppContextInterface {
  theme: Theme | undefined;
  setTheme: (theme: Theme) => void;
}

export const AppContext = createContext({} as AppContextInterface);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>();

  const handleThemeChange = (theme: Theme) => {
    const bodyStyles = document.body.style;

    bodyStyles.setProperty('--primary', theme.primaryColor);
    bodyStyles.setProperty('--secondary', theme.secondaryColor);
    bodyStyles.setProperty('--accent', theme.accentColor);

    setTheme(theme);
  };

  const value = useMemo(
    () => ({
      theme,
      setTheme: handleThemeChange,
    }),
    [theme]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
