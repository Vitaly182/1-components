import React from 'react';
import Navbar from './Navbar';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        sitebar: state.sitebar
    }
}



const SuperNavbarContainer = connect(mapStateToProps)(Navbar);

export default SuperNavbarContainer;