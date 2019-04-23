import React from 'react'

export default function FormButton (props) {
    return(
        <button type="submit" className="btn btn-primary">{props.name}</button>
    )
}