import './common/normalize.css';
import './App.css';
import HomePage from './elements/HomePage/HomePage.jsx';
import ProductCard from './elements/ProductCard/ProductCard.jsx';
import CartContainer from './elements/Cart/CartContainer.js';
import { Routes, Route } from 'react-router-dom';
import Profile from './elements/profile/ProfileContainer.js';

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/cart" element={<CartContainer /> } />
        <Route path="/product_card" element={<ProductCard />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:categoryId" element={<HomePage />} />
        <Route path="profile" element={<Profile />} >
          <Route path=":userId" element={<Profile />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;