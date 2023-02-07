import React, { createContext, useState, useEffect } from 'react';

import { dataFromApi } from '../utils/api';

export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectCategories, setSelectCategories] = useState('New');
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    selectedCategoryData(selectCategories);
  }, [selectCategories]);

  const selectedCategoryData = (query) => {
    setLoading(true);

    dataFromApi(`search/?q=${query}`).then(({ contents }) => {
      setSearchResults(contents);
      setLoading(false);
    });
  };

  return (
    <Context.Provider value={{
      loading,
      setLoading,
      searchResults,
      selectCategories,
      setSelectCategories,
      mobileMenu,
      setMobileMenu,
    }}>
      {
        props.children
      }
    </Context.Provider>
  );
};