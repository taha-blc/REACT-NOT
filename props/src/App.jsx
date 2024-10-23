import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'
import Container from './Container'

function App() {


  return (
    <>


      <Container>
        <Product product='buzdolabı' price={234} />
        <Product product='ayakkabi' price={294} />
      </Container>
    </>
  )
}

export default App
