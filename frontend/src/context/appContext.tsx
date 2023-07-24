import { createContext } from 'react';

interface AppContextData {
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const AppContext = createContext<AppContextData>({} as AppContextData);
