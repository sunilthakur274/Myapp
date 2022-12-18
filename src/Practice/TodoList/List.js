import { useState } from "react"

export default function List()
{
    const[change,setChange] = useState('')

    const[activity,setActivity] =useState([])

    const submitData = (e) =>
    {
            e.preventDefault();
            setActivity((activity)=>{
                const update =[...activity,change]
                
                return update;
            })
    }

    const deleteData = (i) =>
    {
        const del = activity.filter((elem, id) => {
            return i != id;
          });
          setActivity(del);
    }

    return(
    <>
    <form>
        <div>
            <input type='text' placeholder='enter things' value={change} onChange={(event)=>{
                setChange(event.target.value)
            }}/>

            <button type='submit' onClick={submitData}>Submit</button>
        </div>
   
        {activity != [] && activity.map(function(value,i)
        {
            return(<><p key={i}></p>
                    <p>{value}</p>

                    <button type="submit" onClick={()=>{deleteData(i)}}>Delete</button>
            </>)
        })}
     </form>
    </>)
}