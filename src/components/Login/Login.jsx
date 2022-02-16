import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from './../../utils/validators/validators'
import { Input } from '../Common/FormsControls/FormsControl';
import { connect } from 'react-redux';
import {login} from './../../redux/auth-reducer'
import { Navigate } from 'react-router-dom';


const maxLength30 = maxLengthCreator(30)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Email'} name={'email'} component={Input} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field type={'password'} placeholder={'Password'} name={'password'} component={Input} validate={[required, maxLength30]} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={Input} /> remember me
            </div>
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