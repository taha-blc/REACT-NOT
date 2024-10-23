import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  useEffect(() => {
    console.log('Her zaman çalisir')
  })

  useEffect(() => {
    console.log('Kompanent ilk render edildiğinde çalişir')
  }, [])

  useEffect(() => {
    console.log('Kompanent ilk render edildiğinde ve FirstName statesi değiştiğinde çalişir')
  }, [firstName])

  useEffect(() => {
    console.log('Kompanent ilk render edildiğinde ve LastName statesi değiştiğinde çalişir')
  }, [lastName])

  useEffect(() => {
    console.log('Kompanent ilk render edildiğinde LastName veya Firstanem statesi değiştiğinde çalişir')
  }, [firstName, lastName])

  return (
    <>
      <div><button onClick={() => { setFirstName('taha') }}>Adı Değiştir</button></div>
      <div><button onClick={() => { setLastName('bilici') }}>Soyadı Değiştir</button></div>
    </>
  )
}

export default App
