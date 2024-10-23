import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {

  const url = 'http://localhost:3001'

  // ! get isteği

  const getAllUsers = async () => {
    const response = await axios.get(url + '/users')
    console.log(response)
    console.log(response.data)
  }

  // ! get isteği
  const getOneUsers = async (userId) => {
    const response = await axios.get(url + '/users/' + userId)
    console.log(response)
    console.log(response.data)
  }


  // ! post isteği
  const createUser = async (newUser) => {
    const response = await axios.post(`${url}/users`, newUser)
    console.log(response.data)
  }


  // ! Put isteği
  const updateUser = async (userId, updateUser) => {
    await axios.put(`${url}/users/${userId}`, updateUser)
  }


  useEffect(() => {
    // ! geti çalıştırma
    // getAllUsers()
    // getOneUsers(1)


    // ! postu çalıştırma
    // const newUser = {
    //   "usernam": 'arda',
    //   "password": "123"
    // }
    // createUser(newUser)

    // ! Put çalıştırma
    // updateUser("e05b", {
    //   "username": "Gokhan",
    //   "password": 23015
    // })

  }, [])

  return (
    <>

    </>
  )
}

export default App
