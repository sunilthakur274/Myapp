//import Child from './props.js'
import React from 'react'
class Parent extends React.Component
{
    constructor(props)
    {
        super(props)
    }
    render()
    {
        return(<>
       
        <Child example='foo'/>

        </>)
    }
}


class Child extends React.Component
{
    render()
    {
        return<>{this.props.example}</>
    }
}
export default Parent