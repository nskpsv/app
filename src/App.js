import './common/normalize.css';
import './App.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductCard from './elements/ProductCard/ProductCard.jsx';
import CartContainer from './elements/Cart/CartContainer.js';
import { Routes, Route } from 'react-router-dom';
import Profile from './elements/fullProfileInfo/ProfileContainer'
import Users from './elements/Users/UsersContainer.js';
import LoginPage from './elements/login/login.jsx';
import { useSelector } from 'react-redux';
import useCheckAuthProfile from './hooks/useCheckAuthProfile';
import Preloader from './elements/preloader/Preloader';

/*
переделать getMyProfile в пetProfile, скаладывать ВСЕ профили в entity даже свой
в state`е usersReducer`а в usersList должны храниться только userId, а данные профилей в entity
все действия с профилем пользователя перенести в profileReducer
*/ 

const App = () => {
  const authData = useSelector(state => state.auth);

  if (useCheckAuthProfile()) useGetMyProfile()

  if (!authData) {
      return <Preloader />;
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