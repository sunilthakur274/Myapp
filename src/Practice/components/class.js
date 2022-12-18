import React from "react"
class Practice extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {message:'hello'}
    }
    handleClick =() =>
    {
        this.setState({message:'hello how are you'})
    }
    
    
    render()
    {
        return(<><h1 onClick={this.handleClick}>{this.state.message}</h1>
        
        </>)
    }
}

export default Practice