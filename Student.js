import React from 'react'

export default class student extends React.Component{

    render()
    {
        console.log(this.props)
        return(
            <div style={{background:'skyblue' ,margin:20}}>
                <h1> hello {this.props.name}</h1>
                <h3>{this.props.email}</h3>
            </div>
        )
    }
}