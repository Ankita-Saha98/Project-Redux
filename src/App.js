import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import CartContainer from './containers/CartContainer';
function App() {
  return (
    <div className="App">
      <HeaderContainer />
      <CartContainer/>
      <HomeContainer />
    </div>
  );
}

export default App;
