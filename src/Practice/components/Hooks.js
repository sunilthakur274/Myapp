import React,{useEffect, useState} from 'react'

// // WillUnAmount Component

// /*
// function Hooks()
// {
//    useEffect(()=>
//    {
//     return () =>{
//         console.log("Dead");
//         console.log("Almost dead");
//     }
//    })
// }
// export default Hooks;
// */

// // DiD UnAmount Componet
// function Hooks()
// {
//     useEffect(()=>{
              
//         console.log("hello how are you")  
//     },[])
//     return  (<p>hello sunil</p>)
// }

export default function Hooks ()
{
    const[count,setCount] = useState(0)

    useEffect(()=>{
        
       
                return(()=>{
                                    console.log("cell is dead ")
                                    console.log("almost dead")
                            })
     
        
    },[])

    return(<>
                <h1>{count}</h1>
                <button type="submit" onClick={()=>{setCount(count+1)}}>Count</button>
    </>)
}


