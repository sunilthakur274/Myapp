import { useContext } from "react"
import { text } from "../App";
export default function Child3()
{
    const firstName = useContext(text)
    return(<>   
                {firstName}  <br/>
    </>)
}