'use client';
import { ReactNode, useEffect, useState } from 'react';
import { Loading } from '../Loading';
import { Error } from '../Error';
import { useAppContext } from '../AppContext/AppContext';

export const AppGuard = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  const { setTheme } = useAppContext();

  useEffect(() => {
    setTheme({
      primaryColor: '#aaa',
      secondaryColor: '#bbb',
      accentColor: '#sss',
    });
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading && !error) return <Loading />;

  if (error) return <Error errorMsg='test error' />;

  return <>{children}</>;
};
