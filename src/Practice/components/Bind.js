import React, {Component} from 'react'
/* class Bind extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {Value:''}
    }
    Data(event)
    {
        this.setState({Value:event.target.value})
        console.log(this.state);
    }
    render()
    {
        return(<>
                    <input type="text" onChange={this.Data.bind(this)} style={{marginLeft:'20px'}}/>
            </>)
    }
} */

class Bind extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={message:'Hello how are you'}
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick()
    {
        this.setState({message:'Iam  fine'});
    }
    render()
    {
        return (<> <h1 onClick ={this.handleClick}>{this.state.message}</h1></>)
    }
}

/*class Bind extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state ={Value:''}
    }
    Data = (event) => {
        this.setState({Value:event.target.value})
        console.log(this.state)
    }
    render()
    {
        return(<>
                 <input type= "text" onChange={this.Data} />
        </>)
    }
}
*/    
export default Bind;

