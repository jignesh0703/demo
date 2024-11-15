import React from 'react'
import Navbar from './components/Navbar'
import Categorys from './components/Categorys'
import Products from './components/Products'
import Last from './components/Last'


const App = () => {
  return (
    <>
      <Navbar />
      <Categorys />
      <Products />
      <Last />
    </>
  )
}

export default App