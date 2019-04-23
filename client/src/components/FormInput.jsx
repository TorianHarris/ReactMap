import React from 'react'

export default function FormInput (props) {
    return(
        <input type="text" placeholder={props.placeholder} className="form-control"/>
    )
}