import React from 'react';
import Header from './Header';
import cl  from './Header.module.css';
import { connect } from 'react-redux';
import { auth } from '../../redux/auth-reducer';


class HeaderContainer extends React.Component {


    componentDidMount() {
        this.props.auth();
    }

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
    auth
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);