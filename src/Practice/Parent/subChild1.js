export default function Subchild1(props)
{
    const child = ()=>
    {
        console.log("data transfer parent to child")
    }
    return (<>
                <div onClick={props.Parent}>
                    hii guys
                </div>
                
                <div>
                    <p onClick={child}>
                        {props.child}
                        
                        </p>
                </div>

    </>)
}