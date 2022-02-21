import React from 'react';
import {reduxForm} from 'redux-form'
import {required, maxLengthCreator} from './../../utils/validators/validators'
import { Input, createField } from '../Common/FormsControls/FormsControl';
import { connect } from 'react-redux';
import {login} from './../../redux/auth-reducer'
import { Navigate } from 'react-router-dom';
import cl from '../Common/FormsControls/FormsControl.module.css';


const maxLength30 = maxLengthCreator(30)

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>            
            {createField(null, 'Email', 'email', Input, [required, maxLength30])}
            {createField('password', 'Password', 'password', Input, [required, maxLength30])}
            {createField('checkbox', null, 'rememberMe', Input, null, 'remember me')}
            {
            error && <div className={cl.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ 
    form: 'login'
})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps =(state) => ({
    isAuth: state.auth.isAuth
})

const SuperLogin = connect(mapStateToProps, {login})(Login)

export default SuperLogin;