import React from 'react';
import ReactDOM from 'react-dom';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap-theme.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Footer from './Components/Footer';


ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
