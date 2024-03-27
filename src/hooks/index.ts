import { useCallback, useEffect, useState } from "react";

const getItemFromLocalStorage = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);

    if (item !== null) {
      return JSON.parse(item);
    }
  } catch (error) {
    console.error("Can get the item", error);
  }

  return null;
};

const setItemToLocalStorage = <T>(key: string, value: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error("Can get the item from local storage", e);
  }
};

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    return getItemFromLocalStorage<T>(key) || initialValue;
  });

  const setValue = useCallback(async (value: T) => {
    setStoredValue(value);
  }, []);

  useEffect(() => {
    setItemToLocalStorage<T>(key, storedValue);
  }, [key, storedValue]);

  return [storedValue, setValue] as const;
}

export default useLocalStorage;
