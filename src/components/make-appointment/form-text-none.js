import * as React from 'react'
import { useRef } from 'react';
import * as styles from './form-input-none.module.scss'

const FormInputNone = ({ formData, setFormData, forVal }) => {

    const inputText = useRef()
    let newFormData = Object.assign({}, formData);
    var letters = /^[A-Za-z\s]*$/;




    const checkNone = (event) => {
        if (event.target.checked) {
            console.log(event)
            inputText.current.disabled = true
            // delete any errors
            delete newFormData.errors[forVal]
            // update state vlaues
            newFormData.values[forVal] = { val: 'None', isRequired: true }
            setFormData(newFormData)
        } else if (!event.target.checked) {
            inputText.current.disabled = false
            // clear text field
            // inputText.current.value = ''
            if (inputText.current.value.length > 0) {
                errorCheckAfterNone(inputText)
            } else if (inputText.current.value.length == 0) {
                newFormData.values[forVal] = { val: '', isRequired: true }
                setFormData(newFormData)
            }


        }
    }

    const errorCheckAfterNone = (el) => {

        if (el.current.value.length == 0) {
            newFormData.errors[forVal] = { type: 'required', message: 'This field is required' }
            newFormData.values[forVal] = { val: el.current.value, isRequired: true }
            setFormData(newFormData)
        } else if (!el.current.value.match(letters) && el.current.value.length > 0) {
            newFormData.errors[forVal] = { type: 'pattern', message: 'Can only contain letters.' }
            newFormData.values[forVal] = { val: el.current.value, isRequired: true }
            setFormData(newFormData)
        } else if (el.current.value.match(letters) && el.current.value.length > 0) {
            delete newFormData.errors[forVal]
            newFormData.values[forVal] = { val: el.current.value, isRequired: true }
            setFormData(newFormData)
        }

    }

    const errorCheck = (event) => {

        if (event.target.value.length == 0) {
            newFormData.errors[forVal] = { type: 'required', message: 'This field is required' }
            newFormData.values[forVal] = { val: event.target.value, isRequired: true }
            setFormData(newFormData)
        } else if (!event.target.value.match(letters) && event.target.value.length > 0) {
            newFormData.errors[forVal] = { type: 'pattern', message: 'Can only contain letters.' }
            newFormData.values[forVal] = { val: event.target.value, isRequired: true }
            setFormData(newFormData)
        } else if (event.target.value.match(letters) && event.target.value.length > 0) {
            delete newFormData.errors[forVal]
            newFormData.values[forVal] = { val: event.target.value, isRequired: true }
            setFormData(newFormData)
        }

    }
    return (
        <div className={styles.FormInputNone}>
            <div className={styles.inputNoneWrap}>
                <label htmlFor={`${forVal}None`}>
                    <input
                        onChange={checkNone}
                        type="checkbox" id={`${forVal}None`} />
                    None
                </label>
                <input
                    ref={inputText}
                    onChange={errorCheck}
                    type='text'
                    id={forVal}>
                </input >
            </div>
            <p>
                {newFormData.errors[forVal] ? formData.errors[forVal].message : null}
            </p>
        </div>
    )

}
export default FormInputNone