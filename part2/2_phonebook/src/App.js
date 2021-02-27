import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([
      //{ name: 'Kevin', number: '614'},
      //{ name: 'Kira', number: '626'}
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, searchNewName ] = useState('')

  const addName = (event) => {
      event.preventDefault()
      const contactObject={
          name: newName,
          number: newNumber,
      }

      //console.log(newName, names, names.includes(newName))

      if (persons.map(person => person.name).includes(newName)) {
        window.alert(`${newName} is already added to the Phonebook`)
      } else {
        setPersons(persons.concat(contactObject))
        setNewName('')
        setNewNumber('')
      }
  }

  const handleSearchChange = (event) => searchNewName(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange}/>
      <h3>Add New Contact</h3>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} 
            newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Contacts</h3>
      <Persons persons={persons} searchName={searchName} />
    </div>
  )
}

export default App