import { useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PostData(props)
{
    const[formData,setFormData] = useState({name:'',job:'',image:''})
    const[change,setChange] = useState([])
    const[image,setImage] = useState('')
    
    const handleChange = (event) =>
    {
       return setChange((prevdata)=>
        {
            return {...prevdata,[event.target.name]:event.target.value}
        })
    }

    const changeImage = (e) =>
    {
        setImage(e.target.files)
    }

  const asyncPostCall = async () => {
    try {
  
      const  data  = await axios.post('https://jsonplaceholder.typicode.com/posts',change);
      console.log(`data: `, data)
    } catch (error) {   
     console.log(`error: `,error)
    }
  }
  
  const submit = () =>
    {
        setFormData(change);   
        asyncPostCall() 

        // const formDatas = new FormData()
        // formDatas.append('image',image)
        // axios.post('https://jsonplaceholder.typicode.com/posts',formDatas);
        

        console.log(formData) 
        


    }
    

    return(
    <>
            
            <input type='text' placeholder="Enter Name" onChange={handleChange} name='name' />

            <input type='text' placeholder ='Enter Job' onChange={handleChange} name='job' />

            <input type='file' name='image' onChange={changeImage}/>

            <button type='submit' onClick={submit}>Submit</button>
        
            {/* <Link to={`/GetData`}> Link </Link> */}
             
            {/* <h1> {formData.name}</h1> */}

            {/* <h2>{formData.job}</h2> */}

    </>)
}
