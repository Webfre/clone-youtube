import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { AppContext } from './context/ContextApi';
import Header from './components/Header';
import Feed from './components/Feed';
import SearchResult from './components/SearchResult';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <>
      <AppContext>
        <HashRouter>
          <div className='flex flex-col h-full'>
            <Header />
            <Routes>
              <Route path='/' exact element={<Feed />} />
              <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
              <Route path='/video/:id' element={<VideoDetails />} />
            </Routes>
          </div>
        </HashRouter>
      </AppContext>
    </>
  );
}

export default App;
