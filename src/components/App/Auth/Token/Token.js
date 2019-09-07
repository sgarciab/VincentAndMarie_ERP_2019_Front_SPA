import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {loginToken} from '../../../../redux/actions/authActions';

class Token extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            token: '',
            errors:{
            }
         };
    }
    componentDidMount = ()=>{
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard')
        }

        if(!this.props.auth.isAuthenticating){
            this.props.history.push('/login')
        }
    }
    componentWillReceiveProps = (nextProps)=>{
        if(nextProps.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }else{

            if(!nextProps.auth.isAuthenticating){
                this.props.history.push('/login')
            }
            if(nextProps.errors){
                this.setState({errors: {token: nextProps.errors}})
            }
        }
     }

    submitHandler = (event)=>{
        event.preventDefault();
        const {token} = this.state;
        const user = {
            token
        }
        this.props.loginToken(user);
    }

    handleInputChange =(event)=> {
        event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value
        });
    }

    render() {
        const {token, errors} = this.state;
        console.log(errors);
        return (
            <div className="login">
                <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h1 className="display-4 text-center">Token enviado a correo</h1>
                    <p className="text-center">Se ha enviado el token de acceso a su correo, pegue el token en este campo</p>
                    <form noValidate onSubmit={this.submitHandler}>
                        <div className="form-group">
                        <input type="text" 
                               className="form-control form-control-lg" 
                               placeholder="Token" 
                               name="token"  
                               value={token}
                               onChange={this.handleInputChange}/>
                        </div>
                        {errors.token && (<div className="invalid-feedback">{errors.token}</div>)}
                        <input type="submit" className="btn btn-info btn-block mt-4" />
                    </form>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

Token.propTypes = {
    loginToken: PropTypes.func.isRequired,
    auth: PropTypes.object,
    errors: PropTypes.object
}

const mapStateToProps = ({auth, errors}) =>{
    return{
        auth : auth,
        errors: errors.errors
    }
}

export default connect(mapStateToProps,{loginToken})(Token);