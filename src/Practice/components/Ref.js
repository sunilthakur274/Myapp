import React,{Component} from "react";
import Child from "./ChildfrwdRef";
class Uncontrolled extends React.Component
{
    constructor(props)
    {
        super(props)
       
        this.state = { message:'Uncontrolled Ref Componet',print:'Uncontrolled Frwd Ref Componet'}
        this.inputRef = React.createRef();
        this.passwordRef = React.createRef();
        this.NameRef = React.createRef();
        this.passRef = React.createRef();
    }

    Update = () =>
    {
        console.log(this.inputRef.current.value);
        console.log(this.passwordRef.current.value);
    }

    frwdRef =() =>
    {
        console.log(this.NameRef.current.value);
        console.log(this.passRef.current.value);
    }

    render()
    {
        return (<> <h1>{this.state.message}</h1>
                   <input type="text" placeholder="text" ref={this.inputRef}/>
                   <input type ="password" placeholder="text" ref={this.passwordRef} />
                   <button onClick={this.Update}>Submit</button>

                   
                   
                   <h1>{this.state.print}</h1>
                       <Child ref={this.NameRef} />

                  <button onClick={this.frwdRef}>Update</button>
        </>)
    }
}
export default Uncontrolled ;