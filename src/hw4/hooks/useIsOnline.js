import { useState, useEffect } from 'react';

export default function useIsOnline() {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {

    setIsOnline(navigator.onLine);

    function updateOnlineStatus() {
      setIsOnline(navigator.onLine);
    }

    window.addEventListener('online',  updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);

    return () => {
        window.removeEventListener('online',  updateOnlineStatus);
        window.removeEventListener('offline', updateOnlineStatus);
    };
  }, []);

  return isOnline;
}