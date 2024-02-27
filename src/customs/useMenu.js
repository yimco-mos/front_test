import { useState } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(e=>!e);
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
};
