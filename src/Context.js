import React, { useState, useCallback } from "react";

export const ProgressContext = React.createContext({
  addUnlocked: () => {},
  unlocked: [],
});

export function ProgessController({ children }) {
  const [unlocked, setUnlocked] = useState([]);

  const addUnlocked = useCallback(
    (locked) => {
      let vals = unlocked;
      vals.push(locked);
      setUnlocked(vals);
    },
    [unlocked]
  );

  const value = React.useMemo(
    () => ({
      unlocked,
      addUnlocked,
    }),
    [addUnlocked, unlocked]
  );

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
}
