import { useState } from "react"

export default function Form()
{
    const[userData,setUserData] = useState({name:'',
                                            email:'',
                                            address:'',
                                            desgination:'',
                                            gender:''
            });
   
         const[Data,setData] = useState([])
         
    
  const UserDetails = (event) => {
    return setData((prevdata) => {
      return {...prevdata,[event.target.name]:event.target.value };
    });
  };

    const Submit = (event) =>
    {
        event.preventDefault() 
        setUserData(Data)
    }

    return(<>
    <form onSubmit={Submit}>

    <input type='text' placeholder="Enter Name" name='name' onChange={UserDetails}/>

    <input type='text' placeholder="Enter Email" name='email' onChange={UserDetails}/>

    <input type='text' placeholder="Enter Address" name='address' onChange={UserDetails}/>

    <input type='text' placeholder="Enter Desigination" name='desgination' onChange={UserDetails}/>

    <input type='radio'  name='gender' onChange={UserDetails} value="Male"></input>male
    <input type='radio'  name='gender' onChange={UserDetails} value="Female"></input> Female

    <button type='submit'>Submit</button>
    

    </form>

    <h1>Name            {userData.name}</h1>
    <h1>Email           {userData.email}</h1>
    <h1>Address         {userData.address}</h1>
    <h1>Desigination    {userData.desgination}</h1>
    <h1>Gender          {userData.gender}</h1>
    
    
    </>)
}