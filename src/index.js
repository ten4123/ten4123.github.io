import React from 'react';
// import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Button from './component/ui/Button';
import TextInput from './component/ui/TextInput';
import PostList from './component/List/PostList';
import PostItem from './component/List/PostItem';
import MainPage from './component/Page/MainPage';
import PostWritePage from './component/Page/PostWritePage';
import PostViewPage from './component/Page/PostViewPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
      <App/>
  </React.StrictMode>
  // <FormApp/>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
