import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/layout';
// import MainNavigation from './components/Layout/mainNavigation';
import AllMeetUps from './pages/AllMeetUps';
import Favourites from './pages/Favourites';
import NewMeetUps from './pages/NewMeetUps';

function App() {
  return (
    <Layout>
  <Routes>
    <Route path='/' exact
      element={<AllMeetUps/>}
    />
    <Route path='/NewMeetUps'
      element={<NewMeetUps/>}
    />
    <Route path='/Favourites'
      element={<Favourites/>}
    />
  </Routes>
  </Layout>
  );
}

export default App;
