import axios from 'axios'
import React ,{useEffect} from 'react'
import { useState } from 'react' ;
function Api()
{
    const[data,setData] = useState([])
    const Delete = (index) =>
    {
        const del =  data.filter((elem,id)=>
        {
            return index != id
        })
        setData(del);
    }

    useEffect(()=>
    {
        axios.get('https://jsonplaceholder.typicode.com/users/').then((response)=>
        {
           setData(response.data)
           console.log(response.data)
        })
    },[])

  

    return(<>
                {data.map((value,index)=>
                {
                    return(<>
                    <p key={index}>
                    <table style={{border:'2px solid black'}}>
                            <tr style={{padding:'50px'}}>
                            <td style={{padding:'20px'}}><th>{value.id}</th></td>
                            <td style={{padding:'20px'}}>{value.name}</td>
                            <td style={{padding:'20px'}}>{value.username}</td>
                            <td style={{padding:'20px'}}>{value.username}</td>
                            <td style={{padding:'20px'}}>{value.email}</td>
                            <td style={{padding:'20px'}}>{value.address.street}</td>
                           
                            <button type="submit" onClick={()=>Delete(index)}>Delete</button>
                       
                        </tr>
                    </table></p>
                    </>)
                })}
              
    </>)
}
export default Api