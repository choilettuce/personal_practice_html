import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import Library from './chapter3/Library';
// import Clock from './chapter04/clock';
// import CommentList from './chapter05/CommentList';
// import NotificationList from './chapter06/NotificationList';
// import Accommodate from './chapter07/Accommodate';
// import ConfirmButton from './chapter08/ConfirmButton';
import LandingPage from './chapter09/LandingPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage/>
  </React.StrictMode>
);  
