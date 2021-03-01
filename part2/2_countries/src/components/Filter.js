import React from 'react'

const Filter = ({searchName, handleSearchChange}) => 
    <div> Find Countries: <input value={searchName} onChange={handleSearchChange}/></div>

export default Filter