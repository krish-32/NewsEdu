import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsCard from './components/body/NewsCard.jsx'
import Header from './components/header/header'

function App() {
  return (
    <>
    <Header/>
      <NewsCard/>
    </>
  )
}

export default App
