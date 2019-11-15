import React from 'react';
import { connect } from 'react-redux';
import PrivateRoute from './PrivateRoute';
import SideNav from '../SideNav/SideNav'

const PrivateTemplatedRoute = (props) => {
    return (
        <div className="Dashboard container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="row">
                            <SideNav />
                        </div>

                    </div>

                    <div className="col">
                        <div className="row">
                        <PrivateRoute
                            {...props}
                            />
                        </div>
                    </div>
                </div>
            </div>
    );
}


const mapStateToProps = ({auth, component})=>{
    return{
        auth: auth,
    }
}

export default connect(mapStateToProps)(PrivateTemplatedRoute);