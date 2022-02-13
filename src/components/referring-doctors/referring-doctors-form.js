import * as React from 'react'
import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

// import form components
import FormFieldWrapper from '../make-appointment/form-field-wrapper'
import BirthDayInput from '../make-appointment/birth-day-input'
import FormLabel from '../make-appointment/form-label'
import FormInputText from '../make-appointment/form-input-text.js'
import EmailInput from '../make-appointment/email-input'
import FormInputPhone from '../make-appointment/form-input-phone'
import FormSelectList from './form-select-list'
import ReasonForReferral from './reason-for-referral'
import Radiographs from './radiograph'


// import styles
import * as styles from './referring-doctors-form.module.scss'


const ReferringDoctorsForm = () => {
    const spinner = useRef()

    const [formData, setFormData] = useState(
        {
            errors: {
            },
            values: {
                patientName: { val: '', isRequired: false },
                birthday: { bdDay: '', bdMonth: '', bdYear: '' },
                legalGuardian: { val: '', isRequired: false },
                primaryPhone: { val: '', isRequired: false },
                altPhone: { val: '', isRequired: false },
                email: { val: '', isRequired: false },
                patientInsurance: { val: [], isRequired: false },
                doctorName: { val: '', isRequired: false },
                doctorPhone: { val: '', isRequired: false },
                doctorEmail: { val: '', isRequired: false },
                referralReason: { val: {}, isRequired: false },
                radiograph: { val: '', isRequired: false },
                otherInput: { val: '' },
            },
            messageOnSubmit: {}
        }
    )
    let newFormData = Object.assign({}, formData);

    // let serverUrl = 'http://shiftcook.com/api/referring-doctors.php'
    // let serverUrl = 'http://localhost:8888/api/doctors/index.php'
    let serverUrl = 'https://416sleepdentistry.ca/api/referring-doctors.php'
    serverUrl = serverUrl + "/multiplefiles"

    const errorCheck = () => {
        let emptyFields = true
        Object.entries(formData.values).forEach(entry => {
            const [key, value] = entry;
            if (key != "birthday") {

                if (typeof value.val === 'string') {
                    if (value.val !== '') {
                        emptyFields = false
                    }
                } else if (Array.isArray(value.val)) {
                    if (value.val.length > 0) {
                        emptyFields = false
                    }
                } else if (typeof value.val === 'object' &&
                    !Array.isArray(value.val)) {
                    if (Object.keys(value.val).length > 0) {
                        emptyFields = false
                    }
                }
            } else if (key === 'birthday') {
                Object.entries(formData.values.birthday).forEach(dateValue => {
                    const [key, value] = dateValue;
                    if (!value == "") {
                        if (emptyFields) {
                            emptyFields = false
                        }
                    }
                })
            }
        })
        if (emptyFields) {
            return true
        } else {
            return false
        }
    }

    const onSubmitMessage = () => {
        if (formData.messageOnSubmit.error == false) {
            return (
                <p className={styles.submitSuccess}>{formData.messageOnSubmit.message}</p>
            )
        } else if (formData.messageOnSubmit.sysError) {
            return (
                <p className={styles.submitFail}>{formData.messageOnSubmit.message}</p>
            )
        }
    }
    //RESET FORM VALUES AND STATE
    const resetFormValues = (e) => {
        e.target.reset()
        newFormData.values['patientName'].val = ''
        newFormData.values['birthday'] = { bdDay: '', bdMonth: '', bdYear: '' }
        newFormData.values['legalGuardian'].val = ''
        newFormData.values['primaryPhone'].val = ''
        newFormData.values['altPhone'].val = ''
        newFormData.values['email'].val = ''
        newFormData.values['patientInsurance'].val = []
        newFormData.values['doctorName'].val = ''
        newFormData.values['doctorPhone'].val = ''
        newFormData.values['doctorEmail'].val = ''
        newFormData.values['referralReason'].val = {}
        newFormData.values['radiograph'].val = ''
        newFormData.values['otherInput'].val = ''
        newFormData.messageOnSubmit = { error: false, message: 'Referral submitted. Thank you for trusting us to care for your patient. ' }

        if (newFormData.file) {
            delete newFormData.file
        }

        document.querySelectorAll("input").forEach(element => {
            if (element.type == 'text') {
                element.value = ''
            } else if (element.type == 'checkbox' || element.type == 'radio') {
                element.checked = false
            }
        })

        //disable treatmentNotes input
        document.getElementById('treatmentNotes').disabled = true;
        document.getElementById('otherInput').disabled = true;

        //Clear file input and hide it
        document.querySelector("input[type='file']").files = null
        document.querySelector("input[type='file']").style.display = 'none'
        //Reset state to initial blank values
        setFormData(newFormData)

    }
    const handleFormSubmit = e => {
        e.preventDefault();
        document.getElementById("submitBtn").disabled = true
        spinner.current.style.display = 'inline-block'
        const data = new FormData();
        if (errorCheck()) {
            spinner.current.style.display = 'none'
            document.getElementById("submitBtn").disabled = false
            newFormData.messageOnSubmit = {}
            setFormData(newFormData)
            // console.log('error')
        } else {
            // PUSH DATA FROM STATE TO FormData OBJECT
            Object.entries(formData.values).forEach(entry => {
                const [key, value] = entry
                if (key != 'birthday' && key != 'referralReason') {
                    if (value.val != '' || value.val.length != 0) {
                        if (Array.isArray(value.val)) {
                            value.val.forEach(inputValue => {
                                data.append(`${key}[]`, inputValue)
                            })
                        } else {
                            data.append(key, value.val)
                        }
                    }
                } if (key === 'birthday') {
                    Object.entries(formData.values.birthday).forEach(dateValue => {
                        const [key, value] = dateValue;
                        if (!value == "") {
                            data.append(key, value)
                        }
                    })
                } if (key === 'referralReason') {
                    if (Object.keys(value.val).length > 0) {
                        data.append(key, JSON.stringify(value.val))
                    }
                }
            })
            //Push files into formData Object
            if (formData.file) {
                for (let i = 0; i < formData.file.length; i++) {
                    data.append('file' + [i], formData.file[i])
                }
            }

            axios({
                method: "POST",
                url: serverUrl + "/multiplefiles",
                data: data,
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
                .then(res => { // then print response status
                    spinner.current.style.display = 'none'
                    document.getElementById("submitBtn").disabled = false
                    // console.log(res.data.data)
                    resetFormValues(e)

                })
                .catch(res => {
                    spinner.current.style.display = 'none'
                    document.getElementById("submitBtn").disabled = false
                    newFormData.messageOnSubmit = { sysError: true, message: 'Something went wrong.' }
                    setFormData(newFormData)
                })
        }

    }

    return (
        <div className={styles.rdForm}>
            <Container>

                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <Row>
                            <form onSubmit={e => handleFormSubmit(e)}>
                                <FormFieldWrapper>
                                    <h2>Patient Information</h2>
                                </FormFieldWrapper>
                                {/* patient name */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'patientName'}>
                                        Patient Name
                                    </FormLabel>
                                    <FormInputText
                                        required={false}
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'patientName'} />
                                </FormFieldWrapper>
                                {/* birthday */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={''}>
                                        Patient Date of Birth
                                    </FormLabel>
                                    <BirthDayInput
                                        validate={false}
                                        formData={formData}
                                        setFormData={setFormData} />
                                </FormFieldWrapper>
                                {/* legal guardian */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'legalGuardian'}>
                                        Name of Legal Guardian
                                    </FormLabel>
                                    <FormInputText
                                        required={false}
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'legalGuardian'} />
                                </FormFieldWrapper>
                                {/* primary phone */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'primaryPhone'}>
                                        Primary Phone Number
                                    </FormLabel>
                                    <FormInputPhone
                                        required={false}
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'primaryPhone'} />
                                </FormFieldWrapper>
                                {/* alt phone */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'altPhone'}>
                                        Alternate Phone Number
                                    </FormLabel>
                                    <FormInputPhone
                                        required={false}
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'altPhone'} />
                                </FormFieldWrapper>
                                {/* email */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'email'}>
                                        Email
                                    </FormLabel>
                                    <EmailInput
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'email'}
                                        required={false} />
                                </FormFieldWrapper>
                                {/* insurance */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={''}>
                                        Patient Insurance
                                    </FormLabel>
                                    <FormSelectList
                                        list={[{ for: 'none', value: 'No insurance' },
                                        { for: 'private', value: 'Private insurance' },
                                        { for: 'healthySmiles', value: 'Healthy Smiles' },
                                        { for: 'Other', value: 'Other' }]}
                                        listGroup={'patientInsurance'}
                                        formData={formData}
                                        setFormData={setFormData} />
                                </FormFieldWrapper>
                                <FormFieldWrapper>
                                    <h2>Referring Doctor Information</h2>
                                </FormFieldWrapper>
                                {/* Referring Doctor name */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'doctorName'}>
                                        Referring Doctor Name
                                    </FormLabel>
                                    <FormInputText
                                        required={false}
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'doctorName'} />
                                </FormFieldWrapper>
                                {/* primary phone */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'doctorPhone'}>
                                        Referring Doctor Phone Number
                                    </FormLabel>
                                    <FormInputPhone
                                        required={false}
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'doctorPhone'} />
                                </FormFieldWrapper>
                                {/* email */}
                                <FormFieldWrapper>
                                    <FormLabel
                                        required={false}
                                        for={'doctorEmail'}>
                                        Referring Doctor Email
                                    </FormLabel>
                                    <EmailInput
                                        formData={formData}
                                        setFormData={setFormData}
                                        forVal={'doctorEmail'} />
                                </FormFieldWrapper>

                                <FormFieldWrapper>
                                    <h2>Reason for Referral</h2>
                                </FormFieldWrapper>

                                <FormFieldWrapper>
                                    <ReasonForReferral
                                        formData={formData}
                                        setFormData={setFormData} />
                                </FormFieldWrapper>

                                <FormFieldWrapper>
                                    <h2>Radiographs</h2>
                                </FormFieldWrapper>
                                <FormFieldWrapper>
                                    <Radiographs
                                        formData={formData}
                                        setFormData={setFormData} />
                                </FormFieldWrapper>
                                <FormFieldWrapper>
                                    {onSubmitMessage()}
                                </FormFieldWrapper>
                                <Col lg={12}>
                                    <div className={styles.submitWrapper}>
                                        <div className={styles.referralSubmit}>
                                            <input
                                                type="submit"
                                                value="Submit"
                                                id="submitBtn" />

                                            <svg ref={spinner} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32"><path fill="none" d="M0 0h24v24H0z" /><path d="M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0L4.93 6.344a1 1 0 0 1 1.414-1.415L8.464 7.05a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z" /></svg>
                                        </div>
                                    </div>
                                </Col>
                            </form>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReferringDoctorsForm