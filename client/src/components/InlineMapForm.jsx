import React from 'react'
import FormButton from './FormButton'
import FormInput from './FormInput'

export default function InlineMapForm(props) {
    return (
        <div className="bg-dark">
            <form className="form-inline d-flex justify-content-center">
                <div className="form-group my-2 ">
                    <div className="form-group mx-3">
                        <label className="text-light">Find a MidPoint</label>
                    </div>
                    <div className="form-group mx-3">
                        <FormInput placeholder="First Location" />
                    </div>
                    <div className="form-group mx-3">
                        <FormInput placeholder="Second Location" />
                    </div>
                    <FormButton name="submit" />
                </div>
            </form>
        </div>
    )
}