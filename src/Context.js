import React, { useState } from "react";

export const ProgressContext = React.createContext({
  unlocked: [],
  setUnlocked: () => {},
});

export function ProgessController({ children }) {
  const [unlocked, setUnlocked] = useState([]);

  const value = React.useMemo(
    () => ({
      unlocked,
      setUnlocked,
    }),
    [unlocked, setUnlocked]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
