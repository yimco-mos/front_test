import { useState } from 'react';

export const usePagination = (initialPage = 0, itemsPerPage = 3) => {
    const [start, setStart] = useState(initialPage);
  
    const nextPage = () => {
      setStart(prevStart => prevStart + itemsPerPage);
    };
  
    const previousPage = () => {
      setStart(prevStart => Math.max(prevStart - itemsPerPage, 0));
    };
  
    return {
      start,
      nextPage,
      previousPage
    };
  };
  