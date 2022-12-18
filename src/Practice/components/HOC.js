import React,{useState} from 'react'

function HOC()
{
    return (
    <>
        <HOCRED cmp={Counter} />
    </>)
}
function HOCRED(props)
{
    return(<>{props.cmp}</>)
}

function Counter()
{
    const[count,setCount] = useState(0)
    return(<>
            
                <h1>{count}</h1>
                <button type="submit" onclick={()=>setCount(count+1)}>Add</button>
    </>)
}

export default HOC ;