import  Child2  from "./child2"
export function Child1(props)
{
    return(<><Child2></Child2>
    {props.children}
    </>)
}