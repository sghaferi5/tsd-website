import * as React from 'react'
import * as styles from './form-input-text.module.scss'

const EmailInput = ({ required, formData, setFormData, forVal }) => {

    let newFormData = Object.assign({}, formData);

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };


    const errorCheck = (event) => {

        if (event.target.value.length == 0) {
            newFormData.errors[forVal] = { type: 'required', message: 'This field is required' }
            newFormData.values[forVal] = { val: event.target.value, isRequired: true }
            setFormData(newFormData)
        } else if (!validateEmail(event.target.value) && event.target.value.length > 0) {
            newFormData.errors[forVal] = { type: 'pattern', message: 'Incorrect email format.' }
            newFormData.values[forVal] = { val: event.target.value, isRequired: true }
            setFormData(newFormData)
        } else if (validateEmail(event.target.value) && event.target.value.length > 0) {
            delete newFormData.errors[forVal]
            newFormData.values[forVal] = { val: event.target.value, isRequired: true }
            setFormData(newFormData)
        }

    }
    const storeValue = (event) => {
        newFormData.values[forVal] = { val: event.target.value, isRequired: false }
        setFormData(newFormData)
    }
    return (
        <div className={styles.formInputText}>
            <input
                onChange={required ? errorCheck : storeValue}
                type='text'
                id={forVal}>
            </input >
            <p className='error-text'>
                {newFormData.errors[forVal] ? formData.errors[forVal].message : null}
            </p>
        </div>
    )

}
export default EmailInput