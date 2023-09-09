import { useEffect, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

const useAppState = () => {
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const listener = (nextAppState: AppStateStatus) =>
      setAppState(nextAppState);
    const subscription = AppState.addEventListener('change', listener);

    return () => subscription.remove();
  }, []);

  return {
    appState,
  };
};

export default useAppState;
