import React,{Component} from "react";

const Child = React.forwardRef((props,ref) =>
{
    return (<>
                <input type="text" placeholder="Enter Name" ref={ref}/> 
                <input type ="text" placeholder="Enter Password" ref={ref} />
                
            </>)
})
export default Child ;