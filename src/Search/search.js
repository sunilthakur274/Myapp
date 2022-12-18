import React, { useState } from 'react';
import Table from './Table';
import { Users } from './User';
const Search = () => {
    
const [query,setQuery] = useState('')

const Search = (Users) =>{
    return Users.filter((item)=>item.name.toLowerCase().includes(query)
    ||
    item.gender.toLowerCase().includes(query)
    ||
    item.email.toLowerCase().includes(query)
    )
}

return (
        <div style={{marginLeft:'450px',marginTop:'40px'}}>
            <input type='text' onChange={(e)=>
            setQuery(e.target.value)}/>

            <Table data={Search(Users)} />
                
        </div>
    );
};

export default Search;