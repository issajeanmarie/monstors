import React from 'react'
import './search-box.css'

function SearchBox({handleSearch}) {
    return (
        <input 
          type="search" 
          placeholder="type to search..." 
          onChange={handleSearch} 
        />
    )
}

export default SearchBox
