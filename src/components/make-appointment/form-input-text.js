import * as React from 'react'
import { useEffect, useRef } from 'react';
import * as styles from './form-input-text.module.scss'

const FormInputText = ({ required, formData, setFormData, forVal }) => {
    let newFormData = Object.assign({}, formData);
    const inputPoint = useRef()
    useEffect(() => {
        inputPoint.current.value = inputPoint.current.value
    })
    // var letters = /^[A-Za-z\s]*$/;


    const storeValue = (event) => {
        newFormData.values[forVal] = { val: event.target.value }
        setFormData(newFormData)
    }

    const errorCheck = (event) => {

        if (event.target.value.length == 0) {
            newFormData.errors[forVal] = { type: 'required', message: 'This field is required' }
            newFormData.values[forVal] = { val: event.target.value, isRequired: required }
            setFormData(newFormData)
        } else if (event.target.value.length > 0) {
            delete newFormData.errors[forVal]
            newFormData.values[forVal] = { val: event.target.value, isRequired: required }
            setFormData(newFormData)
        }

    }
    return (
        <div className={styles.formInputText}>
            <input
                onChange={required ? errorCheck : storeValue}
                type='text'
                id={forVal}
                name={forVal}
                ref={inputPoint} >
            </input >
            <p className='error-text'>
                {newFormData.errors[forVal] ? formData.errors[forVal].message : null}
            </p>
        </div>
    )

}
export default FormInputText