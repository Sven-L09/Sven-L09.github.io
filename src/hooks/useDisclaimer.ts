import { useState, useEffect } from 'react';

export function useDisclaimer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const hasSeenDisclaimer = sessionStorage.getItem('disclaimer-seen');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAcceptDisclaimer = () => {
    sessionStorage.setItem('disclaimer-seen', 'true');
    setShowDisclaimer(false);
  };

  return { showDisclaimer, handleAcceptDisclaimer };
}
