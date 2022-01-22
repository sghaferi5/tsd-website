import * as React from 'react'
import { useRef } from 'react';

import * as styles from './reason-for-referral.module.scss'

const ReasonForReferral = ({formData, setFormData}) => {

    const treatmentNotesInput = useRef()
    const treatmentCheck = useRef()
    const assessmentCheck = useRef()
    let newFormData = Object.assign({}, formData);


    const storeTextBoxValue = (event) => {
        if (event.target.value.length === 0) {
        newFormData.values['referralReason'].val[2] = undefined
        setFormData(newFormData)
    } else if (event.target.value.length > 0) {
        newFormData.values['referralReason'].val[2] = event.target.value
        setFormData(newFormData)
    }

    }
    const errorCheck = (event) => {
        if (event.target.value.length == 0) {
            newFormData.errors['referralReason'] = { type: 'required', message: 'This field is required' }
            newFormData.values['referralReason'].val[1] = event.target.value
            setFormData(newFormData)
        } else if (event.target.value.length > 0) {
            delete newFormData.errors['referralReason']
            newFormData.values['referralReason'].val[1] = event.target.value
            setFormData(newFormData)
        }
    }

    const checkBoxErrorUpdate = () => {
        if (treatmentNotesInput.current.value.length == 0) {
            newFormData.errors['referralReason'] = { type: 'required', message: 'This field is required' }
            newFormData.values['referralReason'].val[1] = treatmentNotesInput.current.value
            setFormData(newFormData)
        } else if (treatmentNotesInput.current.value.length > 0) {
            delete newFormData.errors['referralReason']
            newFormData.values['referralReason'].val[1] = treatmentNotesInput.current.value
            setFormData(newFormData)
        }
    }   
   
    const updateSelected = (event) => {
        
            if (event.target.checked) {
                if(event.target.id == 'treatment') {
                    treatmentNotesInput.current.disabled= false
                    treatmentNotesInput.current.focus()
                    checkBoxErrorUpdate()
                } else if (event.target.id == 'completeAssessment'){
                    newFormData.values['referralReason'].val[0] =  event.target.value 
                    setFormData(newFormData)}

                if (assessmentCheck.current.checked && !treatmentCheck.current.checked) {
                    delete newFormData.errors['referralReason']
                    console.log('test')
                    setFormData(newFormData)
                }

            } 
            
            else if (!event.target.checked) {

                if(event.target.id == 'treatment') {
                    treatmentNotesInput.current.disabled= true
                    delete newFormData.errors['referralReason']
                    newFormData.values['referralReason'].val[1] =  undefined
                    setFormData(newFormData)
                } else if (event.target.id == 'completeAssessment') {
                    newFormData.values['referralReason'].val[0] =  undefined
                    setFormData(newFormData)
                }

                if (!assessmentCheck.current.checked && !treatmentCheck.current.checked) {
                    newFormData.errors['referralReason'] = { type: 'required', message: 'This field is required' }
                    setFormData(newFormData)
                } 

            }
    }

   
    return (
        <div className={styles.referralReason}>
            <ul> 
                <li>
                    <label htmlFor='completeAssessment'>
                        <input 
                        ref={assessmentCheck}
                        type="checkbox" 
                        name="completeAssessment" 
                        id='completeAssessment' 
                        value='Complete assessment and treatment under sedation' 
                        onChange={updateSelected} />
                        Complete assessment and treatment under sedation
                    </label>
                </li>
                <li>
                    <label htmlFor='treatment'>
                        <input 
                        ref={treatmentCheck}
                        type="checkbox" 
                        name="treatment" 
                        id='treatment' 
                        value='Specific Treatment: ' 
                        onChange={updateSelected} />
                        Specific Treatment as noted below
                    </label>
                    <input onChange={errorCheck} type="text" ref={treatmentNotesInput} name="treatmentNotes" id="treatmentNotes" disabled={true} />
                    <p className={styles.errorMessage}>
                        {newFormData.errors['referralReason'] ? formData.errors['referralReason'].message : null}
                    </p>
                </li>
                <li>
                    <label className={styles.standardLabel} htmlFor="refferalNotes">Additional Information/Notes</label>
                    <textarea  onChange={storeTextBoxValue} name="refferalNotes" id="refferalNotes"></textarea>
                </li>
            </ul>
            
        </div>
    )
}

export default ReasonForReferral