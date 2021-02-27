import React from 'react'
import Person from './Person'

const Persons = ({persons, searchName}) => {
    const searchedPersons = persons.filter((person)=> person.name.toLowerCase().includes(searchName.toLowerCase()))
    return (
        <ul>
            {searchedPersons.map(person =>
                <Person key={person.name} person={person} />
            )}
        </ul>
    )}

export default Persons