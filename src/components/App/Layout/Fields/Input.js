import React, { Component } from 'react';
import { Field, ErrorMessage } from 'formik';
import './Input.css'
const Input = (props)=>{
    const {name} = props;
    const {label} = props;
    return (
        <div class="form-group row">
            <label for={name} class="col-sm-4 col-form-label">{label}</label>
            <div class="col-sm-8">
                <Field {...props} class="form-control" />
                <ErrorMessage name={name} component="div" />
            </div>
        </div>
    )
}

export {Input}