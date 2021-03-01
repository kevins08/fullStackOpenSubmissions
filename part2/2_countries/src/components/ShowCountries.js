import React from 'react'
import ShowCountry from './ShowCountry'

const ShowCountries = ({countries, searchName, searchNewName}) => {
    
    const handleButtonClick = (event) => searchNewName(event.target.value)

    const subCountries=countries.filter((country) => country.name.toLowerCase().includes(searchName.toLowerCase()))

    if (subCountries.length > 10) {
        return ('Too many matches, please specify further')
    } else if (subCountries.length > 1) {
        return (<ul>
                {subCountries.map(country => 
                    <li key={country.name}>{country.name}<button onClick={handleButtonClick} value={country.name}>show</button></li>
                )}
                </ul>
    )} else if (subCountries.length === 0) {
        return ('No matches, please modify the search')
    } else if (subCountries.length === 1) {
        return (<ShowCountry key={subCountries[0].name} country={subCountries[0]}/>)
    }
}

export default ShowCountries