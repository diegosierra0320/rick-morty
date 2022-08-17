import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardResident from './components/CardResident'
import LocationInfo from './components/LocationInfo'

function App() {

  const [location, seTlocation] = useState()
  const [searchInput, setSearchInput] = useState("")
  
  useEffect(() => {
    let randomLocation
    if (searchInput === "") {
      randomLocation = Math.floor(Math.random() * (126 - 1) + 1) 
    } else {
      randomLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${randomLocation}`
    axios.get(URL)
      .then(res => seTlocation(res.data))
      .catch(err => console.log(err))
  },[searchInput])


  // Busqueda por input ***************

    const handdleSubmit = e => {
    e.preventDefault()

    setSearchInput(e.target.search.value);
  }


  return (
    <div className="App">
      <div className='header_container'>
        <img className='header_img' src="/utils/rick And Morty.jpg" alt="" />
        <div className='header_info'>
          <h1>Rick and Morty Wiki</h1>
          <form className='input_search' onSubmit={handdleSubmit}>
            <input id='search' type="text" placeholder='Type a location id'/>
            <button>Search</button>
          </form>
        </div>
      </div>
      <LocationInfo location={location} />
      <h1 className='resident_title'>Residents</h1>
      <div className='card_container'>
        {
          location?.residents.map(url => (
            <CardResident 
              key={url}
              url={url}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
