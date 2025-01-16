import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import Cards from './components/cards'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    async function fetchdata() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts")
      let result = await response.json()
      console.log(result)
      setdata(result)
    }

    fetchdata()
  }, [])

  return (
    <>
      <Navbar />
      {/* {fetch_data} */}
      <div className='my-4'>
        {data.map((items) => {
          return (<div key={items.id}>
            {items.title}
          </div>)
        }
        )}
        <Cards />
      </div>
    </>
  )
}

export default App
