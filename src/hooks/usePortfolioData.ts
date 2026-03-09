import { useContext } from 'react';
import { DataContext } from '../context/portfolioDataContext';
import type { DataContextValue } from '../context/portfolioDataContext';

export function usePortfolioData(): DataContextValue {
  const ctx = useContext(DataContext);
  if (!ctx) throw new Error('usePortfolioData must be used inside <DataProvider>');
  return ctx;
}
