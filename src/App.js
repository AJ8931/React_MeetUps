import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/layout';
// import MainNavigation from './components/Layout/mainNavigation';
import AllArticals from './pages/AllArticals';
import Favourites from './pages/Favourites';
import NewArticals from './pages/NewArticals';

function App() {
  return (
    <Layout>
  <Routes>
    <Route path='/' exact
      element={<AllArticals/>}
    />
    <Route path='/NewArticals'
      element={<NewArticals/>}
    />
    <Route path='/Favourites'
      element={<Favourites/>}
    />
  </Routes>
  </Layout>
  );
}

export default App;
