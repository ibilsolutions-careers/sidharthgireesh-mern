import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShowBook from './pages/ShowBook'
import Home from './pages/Home'

function App() {

  return (
    <>
    //dindmt get time to complete
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/details/:id' element={<ShowBook />} />
    </Routes>
