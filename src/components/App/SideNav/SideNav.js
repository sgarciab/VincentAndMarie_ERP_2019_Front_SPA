import React, {Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import "./SideNav.css"

class SideNav extends Component{
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render(){

        const{user}=this.props.auth;
        let Links = null;

        if (user.roles[0] == 'admin'){
            Links = (
                <ul className="nav">
                    <li className="nav-item">{<NavLink   exact strict to="/dashboard/proveedores">Proveedores</NavLink>}</li>
                    <li class="nav-item">{<NavLink   exact strict to="/dashboard/productos">Productos</NavLink>}</li>
                    <li class="nav-item">{<NavLink   exact strict to="/dashboard/ventas">Ventas</NavLink>}</li>
                </ul>
            );
        }else if(user.roles[0] == 'user'){
            Links = (
                <ul className="nav">
                    <li>{<NavLink   exact strict to="/dashboard/puntoventa">Punto de Venta</NavLink>}</li>   
                </ul>
            );
        }

        return (
            <div className='SideNav'>
                {Links}
            </div>
        )
    }

}

SideNav.propTypes ={
  auth:PropTypes.object
}
  
const mapStateToProps = ({auth}) =>{
    return{
        auth: auth
    }
}
export default connect(mapStateToProps,{})(SideNav);
  