import React from 'react';
import Header from './Header';
import cl  from './Header.module.css';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth, 
        login: state.auth.login
    }
}

let mapDispatchToProps = {
    logout
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);