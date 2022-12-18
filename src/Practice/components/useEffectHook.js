import { useEffect, useState } from "react"

function Hook()
{
    const[data,setData] = useState(0)

    useEffect(()=>{
        console.log("clicked me")
    },[])

    // Did Mount Componet
    const handleClick =()=>
    {
        setData(data+1)
        console.log("hello guys")
    }

    //DID Updata Componet
    useEffect(()=>{
        console.log("hey there")
    })

    //WIll mount

    useEffect(()=>{
                              return ()=>{
                               console.log("Dead")
                                console.log("Iam Almost Dead")
                                    }
                        },[]) 
  

    return(<>
            <h1>${data}</h1>
            <button type="submit" onClick={handleClick}>Submit</button>

    </>)
}
export default Hook ;