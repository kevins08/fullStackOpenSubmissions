import React from 'react'
import Person from './Person'

const Persons = ({persons, searchName, handleDelete}) => {
    const searchedPersons = persons.filter((person)=> person.name.toLowerCase().includes(searchName.toLowerCase()))
    return (
        <ul>
            {searchedPersons.map(person =>
                <Person key={person.name} person={person} handleDelete={handleDelete}/>
            )}
        </ul>
    )}

export default Persons