import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './Pages/Home'
import Browse from './Pages/Browse'
import PostBook from './Pages/PostBook'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import BookDetails from './Pages/BookDetails'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/browse" element={<Browse/>} />
          <Route path="/books/:id" element={<BookDetails/>} />
          <Route path="/post" element={<PostBook/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};