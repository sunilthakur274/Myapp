import { useState } from "react";
import axios from 'axios'
import './Api.css'
export default function Api()
{
    // fetch('https://jsonplaceholder.typicode.com/users').
    // then((response)=>{ return response.json()}).
    // then((result)=>
    // {
    //     console.log(result)
    // })

    const[id,setId] = useState([])

    axios.get('https://jsonplaceholder.typicode.com/posts',
   ).then((response)=>{return setId(response.data)})
        
      


    return(<>
                {id.map((value)=>{
                    return(<>
                
                <table >
                
                    <tr >
                    <td>{value.id}</td>
                    <td>{value.userId}</td>
                    <td>{value.title}</td>
                    <td>{value.Name}</td>
                    </tr>
                
                </table> 


                    </>)
                })}
    
    </>)
}