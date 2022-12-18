import React,{useEffect, useState} from 'react'
export default function Async()
{
    //  function hello()
    // {
    //     return new Promise((resolve, reject) => {
    //         resolve('resolve')
    //     })
    // }
    // async function h1()
    // {
    //     console.log("before calling the function ")
    //     let result = await hello()
    //     console.log(result)
    // }
    // console.log("before the calling")
    // h1() 
    // console.log("hello world")

        useEffect(()=>{
       
       setTimeout(()=>{     let obj1 = new Promise((resolve,reject)=>{
            //resolve('resolve')
            reject('reject')
        }).then((resolve)=>{console.log("resolved")}).catch((error)=>{console.log("error")})
    },1000)
         
    },[])

        const[count,setCount] = useState(0)

        const handleClick = () =>
        {
            setCount(count+1)
        }
    return(<>kch
                    <h1>{count}</h1>   
                    <button type="submit" onClick={handleClick}>Count</button>
    
    </>)

                



}


// export default function Async()
// {
//         function hello()
//         {
//             return new Promise(resolve =>{
//                 setTimeout(()=>
//                 {
//                     resolve("resolve")
//                 },1000)
//             })
//         }
//         async function h1()
//         {
//             console.log("calling")
//             let result = await hello()
//             console.log(result)
//         }
//         h1()
//         console.log("hey how how are your")

//         return(<>hii</>)
// }