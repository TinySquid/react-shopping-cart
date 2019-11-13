import { useState } from 'react';

/**
 * useState that implements localStorage API.
 * @param {string} key - A string identifier. 
 * @param {any} initialValue  - Initial value if key doesn't exist yet.
 */
export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    return JSON.parse(
      window.localStorage.getItem(key)) || initialValue
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};