import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavouriteContextProvider } from './Store/Favourite-Context';

const root = ReactDOM.createRoot(document.getElementById('root'));

//render app to root
root.render(
  <FavouriteContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </FavouriteContextProvider>
);
