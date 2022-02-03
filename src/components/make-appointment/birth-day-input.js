import * as React from 'react'
import { useRef, useEffect } from 'react'

import * as styles from './birth-day-input.module.scss'

const BirthDayInput = ({ validate, formData, setFormData }) => {


    // new copy of current state
    let newFormData = Object.assign({}, formData);
    // input references
    const monthInput = useRef()
    const dayInput = useRef()
    const yearInput = useRef()

    useEffect(() => {
        monthInput.current.value = monthInput.current.value
        dayInput.current.value = dayInput.current.value
        yearInput.current.value = yearInput.current.value
    })


    // combine birthday dates
    let datesCombined = ''
    //Match numbers
    const numbers = /^[0-9]+$/



    // focus on the next input as long as year is not active
    const focusNextInput = (event) => {
        if (event.target.dataset.spot < 2) {
            if (event.target.value.length == 2) {
                if (event.target.dataset.spot == 0) {
                    dayInput.current.focus()
                } else if (event.target.dataset.spot == 1) {
                    yearInput.current.focus()
                }

            }
        }
    }

    const combinedBirthday = () => {

        datesCombined = monthInput.current.value + dayInput.current.value + yearInput.current.value
    }

    const errorCheck = (event) => {
        if (datesCombined.length == 0) {
            newFormData.errors[`birthday`] = { input: event.target.id, type: 'required', message: 'This field is required.' }
            newFormData.values.birthday[event.target.id] = event.target.value
            setFormData(newFormData)
        } else if (!datesCombined.match(numbers) && datesCombined.length > 0) {
            newFormData.errors['birthday'] = { type: 'pattern', message: 'Can only accept numbers.' }
            newFormData.values.birthday[event.target.id] = event.target.value
            setFormData(newFormData)
        } else if (datesCombined.match(numbers) && datesCombined.length < 8) {
            newFormData.errors['birthday'] = { type: 'pattern', message: 'Incorrect date format' }
            newFormData.values.birthday[event.target.id] = event.target.value
            setFormData(newFormData)
        }
        else if (datesCombined.match(numbers) && datesCombined.length > 0) {
            delete newFormData.errors['birthday']
            newFormData.values.birthday[event.target.id] = event.target.value
            setFormData(newFormData)
        }
    }

    const storeValues = (event) => {
        newFormData.values.birthday[event.target.id] = event.target.value
        setFormData(newFormData)
    }


    const handleValidation = (event) => {
        combinedBirthday()
        focusNextInput(event)
        if (validate) {
            errorCheck(event)
        } else {
            storeValues(event)
        }

    }



    return (
        <div className={styles.birthdayInput}>
            <div className={styles.birthdayForm}>
                <div class={styles.twoDigitInput}>
                    <p>Month</p>
                    <input
                        ref={monthInput}
                        type='text'
                        maxlength="2"
                        id='bdMonth'
                        name='bdMonth'
                        data-spot={0}

                        onChange={handleValidation}>

                    </input >
                </div>
                <div class={styles.twoDigitInput}>
                    <p>Day</p>
                    <input
                        ref={dayInput}
                        type='text'
                        maxlength="2"
                        id='bdDay'
                        name='bdDay'
                        data-spot={1}
                        onChange={handleValidation}>
                    </input >
                </div>
                <div class={styles.fourDigitInput}>
                    <p>Year</p>
                    <input
                        ref={yearInput}
                        type='text'
                        maxlength="4"
                        id='bdYear'
                        name='bdYear'
                        data-spot={2}
                        onChange={handleValidation}>
                    </input >
                </div>
            </div>
            <div>
                <p className='error-text'>
                    {newFormData.errors['birthday'] ? formData.errors['birthday'].message : null}
                </p>
            </div>
        </div>

    )
}

export default BirthDayInput