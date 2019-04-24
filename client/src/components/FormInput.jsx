import React from 'react'

export default function FormInput (props) {
    return(
        <input type="text" name={props.name} placeholder={props.placeholder} className="form-control" onChange={props.handleChange}/>
    )
}