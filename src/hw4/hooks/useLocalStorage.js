import { useState } from 'react';

const useLocalStorage = (initialKey, initialValue) => {

  const [storedValue, setStoredValue] = useState(
    () => {
      try {
        const item = localStorage.getItem(initialKey);
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        console.log(error)
        return initialValue
      }
    })

  const setValue = value => {
    try {
      setStoredValue(value)
      localStorage.setItem(initialKey, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage;