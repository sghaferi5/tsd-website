import * as React from 'react'
import * as styles from './form-input-text.module.scss'

const FormInputPhone = ({ required, formData, setFormData, forVal }) => {

    let newFormData = Object.assign({}, formData);
    var phoneNumberValidate = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;




    const storeValue = (event) => {
        newFormData.values[forVal] = event.target.value
        setFormData(newFormData)
    }

    const errorCheck = (event) => {

        if (event.target.value.length == 0) {
            newFormData.errors[forVal] = { type: 'required', message: 'This field is required' }
            newFormData.values[forVal] = { val: event.target.value, isRequired: required }
            setFormData(newFormData)
        } else if (!event.target.value.match(phoneNumberValidate) && event.target.value.length > 0) {
            newFormData.errors[forVal] = { type: 'pattern', message: 'Enter a valid phone number' }
            newFormData.values[forVal] = { val: event.target.value, isRequired: required }
            setFormData(newFormData)
        } else if (event.target.value.match(phoneNumberValidate) && event.target.value.length > 0) {
            delete newFormData.errors[forVal]
            newFormData.values[forVal] = { val: event.target.value, isRequired: required }
            setFormData(newFormData)
        }

    }
    return (
        <div className={styles.formInputText}>
            <input
                onChange={errorCheck}
                type='text'
                id={forVal}>
            </input >
            <p>
                {newFormData.errors[forVal] ? formData.errors[forVal].message : null}
            </p>
        </div>
    )

}
export default FormInputPhone