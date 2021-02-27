import React from 'react'

const Filter = ({searchName, handleSearchChange}) => 
    <div> Filter shown for: <input value={searchName} onChange={handleSearchChange}/></div>

export default Filter