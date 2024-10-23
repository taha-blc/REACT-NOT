import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [Firstname, setFirstname] = useState('Enes')
  const [Lastname, setLastname] = useState('Bayram')
  const [Names, setNames] = useState(['taha', 'ali', 'bayram', 'adem', 'turgut'])
  const [Count, setCount] = useState(0)


  const methodIsmi = () => {
    setLastname('taha')
  }

  const arti = () => {
    setCount(Count + 1)
  }

  const azalt = () => {
    setCount(Count - 1)
  }



  return (
    <>

      {/* // ! isim soyisim kismi Start */}
      {/* <div>{Firstname}</div>
      <div><button onClick={() => { setFirstname('Taha') }}>İsmi değiştir</button></div>
      <hr />
      <div>{Lastname}</div>
      <div><button onClick={methodIsmi}>Soyadı değiştir</button></div> */}
      {/* // ! isim soyisim kismi End */}

      <div>
        {/* {Names.map((name, index) => (
          <div key={index}>{name}</div>
        ))} */}
        <h1>{Count}</h1>
        <button onClick={arti}>arttır</button>
        <button onClick={azalt}>azalt</button>
      </div>
    </>
  )
}

export default App
