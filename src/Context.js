import React, { useState } from "react";

export const ProgressContext = React.createContext({
  setUnlocked: () => {},
  unlocked: [],
});

export function ProgessController({ children }) {
  const [unlocked, setUnlocked] = useState([]);

  const value = React.useMemo(
    () => ({
      setUnlocked,
      unlocked,
    }),
    [setUnlocked, unlocked]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
