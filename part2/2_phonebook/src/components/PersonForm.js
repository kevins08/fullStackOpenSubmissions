import React from 'react'

const PersonForm = ({addName, newName, handleNameChange, newNumber, handleNumberChange}) => {
    return (
        <form onSubmit={addName}>
            <div> Name:    <input value={newName} onChange={handleNameChange}/></div>
            <div> Phone #: <input value={newNumber} onChange={handleNumberChange}/></div>
            <div><button type="submit">Add Contact</button></div>
        </form>
)}
    
export default PersonForm