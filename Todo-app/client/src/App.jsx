import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoList from './components/TodoList'

function App() {
  

  return (
    <>
       <Header/>

        <TodoList/>
       <Footer/>
    </>
  )
}

export default App
