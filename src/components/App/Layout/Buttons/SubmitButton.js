import React, { Component } from 'react';
const SubmitButton = (props)=>{
    const {label, isSubmitting} = props;
    return (
        <button type="submit" class="btn btn-primary" disabled={isSubmitting}>
            {label}
        </button>
    )
}

export {SubmitButton}