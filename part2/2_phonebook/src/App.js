import React, { useEffect, useState } from 'react'
import phonebookService from './services/phonebook'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ searchName, searchNewName ] = useState('')
  const [ notificationMessage, newNotification ] = useState(null)
  const [ errorMessage, newErrorMessage ] = useState(null)

  useEffect(() => {
    phonebookService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const addName = (event) => {
      event.preventDefault()
      const contactObject={
          name: newName,
          number: newNumber,
      }

      if (persons.map(person => person.name).includes(newName)) {
        const result=window.confirm(`${newName} is already added to the Phonebook, would you like to update the phone number?`)
        if (result) {
          phonebookService
            .update(persons.find(p=> p.name===newName).id, contactObject)
            .then(response => {
              setPersons(persons.filter(p=>p.name !== newName).concat(response))
              newNotification(`Updated phone number for ${newName} to ${newNumber}`)
              setTimeout(() => {
                newNotification(null)
              }, 3000)
              setNewName('')
              setNewNumber('')
            })
            .catch(error => {
              newErrorMessage(`Contact ${newName} was removed from the server`)
              setTimeout(() => {
                newErrorMessage(null)
              }, 3000)
              setPersons(persons.filter(p => p.name !== newName))
              setNewName('')
              setNewNumber('')
          })
        }
      } else {
        phonebookService
          .create(contactObject)
          .then(response => {
            setPersons(persons.concat(response))
            newNotification(`Added new contact: ${newName}`)
            setTimeout(() => {
              newNotification(null)
            }, 3000)
            setNewName('')
            setNewNumber('')
          })
      }
  }

  const handleSearchChange = (event) => searchNewName(event.target.value)
  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleDelete = (event) => {
    const result=window.confirm(`Delete ${persons.find(p=> p.id===parseInt(event.target.value)).name}?`)
    if ( result ) {
      const deleted=persons.find(p=> p.id===parseInt(event.target.value)).name
      console.log(event.target.value)
      phonebookService
        .deleteContact(event.target.value)
        .then(response => {
          setPersons(persons.filter(p => p.id !== parseInt(event.target.value)))
          newNotification(`Contact ${deleted} was removed from the Phonebook`)
          setTimeout(() => {
            newNotification(null)
          }, 3000)
        })
        .catch(error => {
          newErrorMessage(`Contact ${deleted} was already removed from the server`)
          setTimeout(() => {
            newErrorMessage(null)
          }, 3000)
          setPersons(persons.filter(p => p.name !== deleted))
      })
      }
  }

  const Notification = ({message}) => {
    if (message === null) {
      return null
    }
    return (
      <div className='notification'>
        {message}
      </div>
    )
  }

  const Error = ({message}) => {
    if (message === null) {
      return null
    }
    return (
      <div className='error'>
        {message}
      </div>
    )
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage}/>
      <Error message={errorMessage}/>
      <Filter searchName={searchName} handleSearchChange={handleSearchChange}/>
      <h3>Add New Contact</h3>
      <PersonForm addName={addName} newName={newName} handleNameChange={handleNameChange} 
            newNumber={newNumber} handleNumberChange={handleNumberChange}/>
      <h3>Contacts</h3>
      <Persons persons={persons} searchName={searchName} handleDelete={handleDelete}/>
    </div>
  )
}

export default App