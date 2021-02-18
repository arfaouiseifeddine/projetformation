import React from 'react'



const SearchAnnonce = ({setSearch}) => {
    return (
        <div>
            <input type="text" placeholder="Annonce search"
            onChange={(e) => setSearch(e.target.value)}/>
        </div>
    )
}

export default SearchAnnonce;