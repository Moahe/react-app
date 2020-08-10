import React, { useCallback } from 'react';
import { useState, useContext } from 'react';

export interface User {
    name: string;
}

export const MOCK_USER: User = {
    name: 'Test'
  };

export interface CurrentUserContextValues {
    user: User | null;
  }

interface CurrentUserContextData extends CurrentUserContextValues {
    setUser: (user: User | null) => void;
  }

const defaultValues: CurrentUserContextData = {
    user: null,
    setUser: () => {},
  };
  
  const CurrentUserContext = React.createContext<CurrentUserContextData>(defaultValues);
  
  interface CurrentUserContextProviderProps {
    initialValues?: CurrentUserContextData;
  }

  export const CurrentUserContextProvider: React.FunctionComponent<CurrentUserContextProviderProps> = ({
    children,
    initialValues,
  }) => {
    const [user, setUser] = useState(initialValues ? initialValues.user : defaultValues.user);
    return (
      <CurrentUserContext.Provider value={{ user, setUser }}>{children}</CurrentUserContext.Provider>
    );
  };

  interface CurrentUserHook extends CurrentUserContextValues {
    load: () => Promise<void>;
    updateUser: (name: string) => Promise<User | undefined>;
  }

  const useCurrentUser = (): CurrentUserHook => {
    const { user, setUser } = useContext(CurrentUserContext);
  
    const load = useCallback(async () => {
      try {
        const currentUser = MOCK_USER;
        setUser(currentUser);
        console.log("Went here");
        
      } catch (e) {
      }
    }, [setUser]);

    const updateUser = useCallback(async (name: string) => {
        try {
          const currentUser = MOCK_USER;
          currentUser.name = name;
          setUser(currentUser);
          console.log("Went here2"+name);

          return currentUser;
          
        } catch (e) {
        }
      }, [setUser]);

  
    return { load, user, updateUser };
  };
  
  export default useCurrentUser;
  