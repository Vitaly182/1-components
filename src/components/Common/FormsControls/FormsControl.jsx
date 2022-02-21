import cl from './FormsControl.module.css';
import {Field} from 'redux-form'



const Element = Element => ({ input, meta: {touched, error}, ...props }) => {
    const hasError = touched && error
    return (
        <div className={cl.formControl + ' ' + (hasError ? cl.error : '')}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = Element('textarea')

export const Input = Element('input')

export const createField = (type, placeholder, name, component, validate, text = '') => (
    <div>
        <Field type={type} placeholder={placeholder} name={name} component={component} validate={validate} /> {text}
    </div>
)