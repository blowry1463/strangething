import { useState,} from 'react'
import Nav from './components/nav'
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Posts from './components/Posts'
const cohortName = '2306-ftb-et-web-ft'
const baseUrl = `https://strangers-things.herokuapp.com/api/${cohortName}`



function App() {
  
  return (
    <>
   
     
      <Nav />
      <Routes>
      
        <Route path='/' element={<h1>Stranger's Things</h1>} />
         <Route path='/posts' element={<Posts/>} />
        {/* <Route path= '/:title' element={<SelectedPost />}/> */}
        <SignUpForm setToken={setToken} />
        <Authenticate token={token}/>
      
      </Routes>
    </>
  )
}

export default App
