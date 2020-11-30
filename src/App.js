import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component.jsx';




function App() {
  return (
    <React.StrictMode>
    <div >
    <Header/>
      <switch>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop' component={ShopPage}/>
      </switch>
    </div>
    </React.StrictMode>
  );
}

export default App;