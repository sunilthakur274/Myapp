import  Child3 from "./child3"
import {text} from "../App"
import {useContext} from "react"

export default function Child2()
{
    const count = useContext(text);
    return(<><Child3></Child3></>)
}