import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const [searchName, searchNewName] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get(`https://restcountries.eu/rest/v2/all`)
      //.get(`https://restcountries.eu/rest/v2/name/${searchName}`)
      //.get('https://restcountries.eu/rest/v2/name/ir')
      //.get('https://restcountries.eu/rest/v2/name/spain')
      .then(response => {
        setCountries(response.data)
      })
  },[])

  const handleSearchChange = (event) => searchNewName(event.target.value)

  return (
    <div>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange}/>
      <ShowCountries countries={countries} searchName={searchName} searchNewName={searchNewName}/>
    </div>
  )
}

export default App;