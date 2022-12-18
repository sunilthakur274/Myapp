import { useState } from "react"

export default function Listdata() 
{
    const[change,setChange] = useState('');
    const[activity,setActivity] = useState([]) 
   

    const Submit = () => 
    {
        setActivity((prevdata)=>{
            const result = [...prevdata,change]
            return result
        })
        setChange('')
    }
    
    const deleted = (index) =>{
            const del =  activity.filter(function(elem,id)
            {
                return index != id;
            })
            setActivity(del)
    }

    const Edit = (index) =>
    {
        const Edit = activity.filter(function(elem,id)
        {
            return index === id 
        })
        setChange(Edit)
    }

    const update = (index) =>
    {
        const newvalue = [change]
        setActivity(newvalue) 
    }

    return(<>
    
    
    <div style={{margin:'100px 0px 0px 250px'}}>
    <input type='text' placeholder='enterdata' value={change} onChange={(event)=>{setChange(event.target.value)}}/>
    </div>
    
    <button type='submit' onClick={Submit} style={{margin:'0px 0px 0px 369px'}}> Submit </button>
    
    <h1>{activity != [] && activity.map(function(value,index)
    
    {
        return(<>   
                    <p key={index}></p>
                <div style={{display:'flex'}}>
                    <p style={{margin:'0px 0px 0px 185px'}}>{value}</p>

                    <button type='submit' onClick={()=>{deleted(index)}} style={{margin:'0px 0px 0px 90px'}}>Delete</button>

                    <button type='submit' onClick={()=>{Edit(index)}} style={{margin:'0px 0px 0px 90px'}}>Edit</button>

                    <button type='submit' onClick={()=>{update(index)}} style={{margin:'0px 0px 0px 90px'}}>Update</button>

                </div> 
        </>)    
    })}</h1>
   
   
    </>)
}