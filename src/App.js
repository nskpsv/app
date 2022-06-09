import './common/normalize.css';
import './App.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductCard from './elements/ProductCard/ProductCard.jsx';
import CartContainer from './elements/Cart/CartContainer.js';
import { Routes, Route, Navigate } from 'react-router-dom';
import Profile from './elements/fullProfileInfo/ProfileContainer'
import Users from './elements/Users/UsersContainer.js';
import LoginPage from './elements/login/login.jsx';
import { useSelector } from 'react-redux';
import CheckAuthProfile from './hooks/CheckAuthProfile';
import Preloader from './elements/preloader/Preloader';
import React from 'react';

/*
НЕ НАДО СМОТРЕТЬ: 89, 90, 92, 95, 96, 98, 99, 100?
*/

const App = () => {
  const authData = useSelector(state => state.auth.authData)
  const profile = useSelector(state => state.profile.profiles[authData?.data.id]);

  CheckAuthProfile();

  if (!authData) {
    return <Preloader />;
  } else if (authData.resultCode) {
    <Navigate to='/login' />
  } else if (!profile) {
    return <Preloader />
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/product_card" element={<ProductCard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryId" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="profile/:userId" element={<Profile />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
};

export default App;