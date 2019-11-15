import React , {Component} from 'react';
import './MainContent.css';
import SideNav from '../../SideNav/SideNav'

class MainContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render(){
        return (
            <div className="MainContent container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="row">
                            <SideNav />
                        </div>

                    </div>

                    <div className="col">
                        <div className="row">
                           {this.props.children}
                        </div>
                    </div>
                </div>
        </div>

        )

    }
}

export default MainContent;