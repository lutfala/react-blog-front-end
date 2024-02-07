//logic and apperance in one = react. Everything inside return statement is the visual stuff
//everything above return statement is the logic

import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import NewPostPage from './pages/NewPostPage'
import NavBar from './components/NavBar'


//renamed switch to routes. routes tag change between display pages, depending on the path.
//NavBar is always displaying no matter what path you are in

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/posts/new' element={<NewPostPage/>} />
        <Route path='/posts/:id' element={<PostPage/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
