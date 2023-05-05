import React from 'react';
import './App.css';
import Button from './component/ui/Button';
import TextInput from './component/ui/TextInput';
import PostList from './component/List/PostList';
import PostItem from './component/List/PostItem';
import MainPage from './component/Page/MainPage';
import PostWritePage from './component/Page/PostWritePage';
import PostViewPage from './component/Page/PostViewPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
//     <BrowserRouter>
//     <Routes>
//       <Route index path="main" element ={<MainPage/>} />
//       <Route path="write" element={<PostWritePage />} />
//       <Route path='post/:id' element={<PostViewPage/>} />
//     </Routes>
// </BrowserRouter>
<BrowserRouter>
    <Routes>
    <Route index element={<MainPage />} />
    <Route path='main' element={<MainPage />} />
    <Route path="write" element={<PostWritePage />} />
    <Route path="post/:id" element={<PostViewPage />} />
    </Routes>
</BrowserRouter>
  
  );
}

export default App;
