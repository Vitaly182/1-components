import React from 'react';
import Header from './Header';
import cl  from './Header.module.css';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../redux/auth-reducer';
import {authAPI} from './../../api/api'

class HeaderContainer extends React.Component {


    componentDidMount() {

        authAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
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
    setAuthUserData
}


export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);