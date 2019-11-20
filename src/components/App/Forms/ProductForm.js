import React, { Component } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import {Input} from '../Layout/Fields'
import {SubmitButton} from '../Layout/Buttons'


class ProductForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email : '',
            password : ''
         };

        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(value, {setSubmitting}){
        console.log();
        this.state;
        debugger;
    
    }

    _validate(values){
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
    }

    render() {
        return (
            <div className="container ">
               <Formik  
                initialValues = {this.state}  
                validate={this._validate}
                onSubmit = {this._onSubmit}
               >
                    {({
                        isSubmitting,
                    }) => (
                        <Form>
                        <Input
                            type="email"
                            name="email"
                            label="Email"
                        />
                        
                        <Input
                            type="password"
                            name="password"
                            label="Password"
                        />
                        <SubmitButton  isSubmitting={isSubmitting} label = "Guardar"/>
                        </Form>
                    )}

               </Formik>
            </div>
        );
    }
}

export default ProductForm;