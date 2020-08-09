import React, { ReactElement } from 'react';

import Routes from './routes';

import './assets/styles/global.css';
//Added Login functionality
import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';

const Home = () => (
  <HomePage />
);

const Login = () => (
  <LoginPage />
);
//till here
function App(): ReactElement {
  return <Routes />;
}

export default App;
