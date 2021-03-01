import React from 'react'
import Languages from './Languages'
import Weather from './Weather'

const ShowCountry = ({country}) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <div>Capital: {country.capital}</div>
            <div>Population: {country.population}</div>
            <h2>Languages</h2>
            <Languages languages={country.languages}/>
            <img src={country.flag} alt={`Flag of ${country.name}`} width="150" />
            <Weather city={country.capital}/>
        </div>
)}

export default ShowCountry