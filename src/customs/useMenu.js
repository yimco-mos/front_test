import { useState } from 'react';

export const useMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(e=>!e);
    console.log('menu movil')
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
};
