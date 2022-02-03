import * as React from 'react'
import { useRef, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

// import form components
import FormFieldWrapper from './form-field-wrapper'
import BirthDayInput from './birth-day-input'
import FormLabel from './form-label'
import FormInputText from './form-input-text.js'
import EmailInput from './email-input'
import ContactPreference from './contact-preference'
import FormInputNone from './form-text-none'
import OtherComments from './other-comments'
import FormMessage from './form-message'
import FormInputPhone from './form-input-phone'

import * as styles from './make-appointment-main.module.scss'


const MakeAppointmentMain = () => {

    const API_PATH = 'http://shiftcook.com/api/make-appointment.php'
    // const API_PATH = 'http://localhost:8888/api/contact/index.php'
    const spinner = useRef()

    const [formData, setFormData] = useState({
        errors: {
        },
        values: {
            firstName: { val: '', isRequired: true },
            lastName: { val: '', isRequired: true },
            birthday: { bdDay: '', bdMonth: '', bdYear: '', isRequired: true },
            legalGuardian: { val: '', isRequired: false },
            primaryPhone: { val: '', isRequired: true },
            altPhone: { val: '', isRequired: false },
            email: { val: '', isRequired: true },
            contactMethod: { val: '', isRequired: true },
            medConditions: { val: '', isRequired: true },
            medications: { val: '', isRequired: true },
            allergies: { val: '', isRequired: true },
            otherComments: { val: '', isRequired: false }
        },
        messageOnSubmit: {}
    })

    let newFormData = Object.assign({}, formData);

    const errorCheck = () => {
        var datesMissing = 0
        Object.entries(formData.values).forEach(entry => {
            const [key, value] = entry;
            if (key !== 'birthday') {
                if (value.val === '' && value.isRequired)
                    newFormData.errors[key] = { message: 'This field is required', type: 'required' }
                newFormData.messageOnSubmit = { message: 'Error: Some fields are empty.', isError: 'true' }
                setFormData(newFormData)
            }
        })

        var datesMissing

        Object.entries(formData.values.birthday).forEach(dateValue => {
            const [key, value] = dateValue;
            if (key != 'isRequired') {
                if (value == '') {
                    datesMissing += 1
                }
            }
        })
        if (datesMissing > 2) {
            newFormData.errors['birthday'] = { message: 'This field is required', type: 'required' }
            newFormData.messageOnSubmit = { message: 'Error: Some fields are empty.', isError: 'true' }
            setFormData(newFormData)
        }
        if (Object.keys(formData.errors).length == 0) {
            return false
        } else {
            return true
        }
    }

    //RESET FORM VALUES AND STATE
    const resetFormValues = (e) => {
        e.target.reset()
        document.querySelectorAll("input").forEach(element => {
            if (element.type == 'text') {
                element.value = ''
            } else if (element.type == 'checkbox' || element.type == 'radio') {
                element.checked = false
            }
        })

    }

    const handleFormSubmit = e => {
        e.preventDefault();
        document.getElementById('submitBtn').disabled = true
        spinner.current.style.display = 'inline-block'
        if (errorCheck()) {
            spinner.current.style.display = 'none'
            document.getElementById('submitBtn').disabled = false

        } else {
            axios({
                method: 'POST',
                url: `${API_PATH}`,
                headers: { 'content-type': 'application/json' },
                data: formData.values
            })
                .then(result => {
                    console.log(result.data[0].some)
                    resetFormValues(e)
                    spinner.current.style.display = 'none'
                    document.getElementById('submitBtn').disabled = false

                    setFormData({
                        errors: {
                        },
                        values: {
                            firstName: { val: '', isRequired: true },
                            lastName: { val: '', isRequired: true },
                            birthday: { bdDay: '', bdMonth: '', bdYear: '', isRequired: true },
                            legalGuardian: { val: '', isRequired: false },
                            primaryPhone: { val: '', isRequired: true },
                            altPhone: { val: '', isRequired: false },
                            email: { val: '', isRequired: true },
                            contactMethod: { val: '', isRequired: true },
                            medConditions: { val: '', isRequired: true },
                            medications: { val: '', isRequired: true },
                            allergies: { val: '', isRequired: true },
                            otherComments: { val: '', isRequired: false }
                        },
                        messageOnSubmit: {},
                        mailSent: result.data[0].sent
                    })
                })
                .catch(error => {
                    document.getElementById('submitBtn').disabled = false
                    spinner.current.style.display = 'none'
                    setFormData(
                        {
                            errors: {
                            },
                            values: {
                                firstName: { val: '', isRequired: true },
                                lastName: { val: '', isRequired: true },
                                birthday: { bdDay: '', bdMonth: '', bdYear: '', isRequired: true },
                                legalGuardian: { val: '', isRequired: false },
                                primaryPhone: { val: '', isRequired: true },
                                altPhone: { val: '', isRequired: false },
                                email: { val: '', isRequired: true },
                                contactMethod: { val: '', isRequired: true },
                                medConditions: { val: '', isRequired: true },
                                medications: { val: '', isRequired: true },
                                allergies: { val: '', isRequired: true },
                                otherComments: { val: '', isRequired: false }
                            },
                            messageOnSubmit: {},
                            mailSent: error.sent,
                            errorMsg: { error: error.message }
                        }
                    )
                })
        }

    };
    return (
        <div class={styles.appointmentMain}>
            <div className={styles.appointmentContent}>
                <div className={styles.introSection}>
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }}>
                                <h1>Make an Appointment</h1>
                                <p>
                                    To make a consultation appointment for sleep dentistry for you or your child, you can fill out this form. Once you have completed the form, please press submit. A staff member from our office will contact you within one week to schedule your appointment.
                                    (Please note that if your family dentist has referred you to our office, you do not need to fill out this form, and we will be contacting you directly to book your consultation appointment.)

                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div class={styles.formSection}>
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }}>
                                <form onSubmit={e => handleFormSubmit(e)}>
                                    <Row>
                                        <FormFieldWrapper>
                                            <FormLabel required={true}
                                                for={'firstName'}>
                                                Patient First Name
                                            </FormLabel>
                                            <FormInputText
                                                required={true}
                                                formData={formData}
                                                setFormData={setFormData}
                                                forVal={'firstName'} />
                                        </FormFieldWrapper>

                                        <FormFieldWrapper>
                                            <FormLabel required={true}
                                                for={'lastName'}>
                                                Patient Last Name
                                            </FormLabel>
                                            <FormInputText
                                                required={true}
                                                formData={formData}
                                                setFormData={setFormData}
                                                forVal={'lastName'} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <FormLabel required={true}
                                                for={'birthday'}>
                                                Patient Date of Birth
                                            </FormLabel>
                                            <BirthDayInput
                                                validate={true}
                                                formData={formData}
                                                setFormData={setFormData}
                                            />
                                        </FormFieldWrapper>
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
                                        <FormFieldWrapper>
                                            <FormLabel
                                                required={true}
                                                for={'primaryPhone'}>
                                                Primary Phone Number
                                            </FormLabel>
                                            <FormInputPhone
                                                required={true}
                                                formData={formData}
                                                setFormData={setFormData}
                                                forVal={'primaryPhone'} />
                                        </FormFieldWrapper>

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

                                        <FormFieldWrapper>
                                            <FormLabel
                                                required={true}
                                                for={'email'}>
                                                Email
                                            </FormLabel>
                                            <EmailInput
                                                formData={formData}
                                                setFormData={setFormData}
                                                forVal={'email'}
                                                required={true} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <ContactPreference
                                                formData={formData}
                                                setFormData={setFormData} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <FormLabel
                                                required={true}
                                                for={'medConditions'}>
                                                Patient medical conditions
                                            </FormLabel>
                                            <FormInputNone
                                                formData={formData}
                                                setFormData={setFormData}
                                                forVal={'medConditions'} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <FormLabel
                                                required={true}
                                                for={'medications'}>
                                                Patient medications
                                            </FormLabel>
                                            <FormInputNone
                                                formData={formData}
                                                setFormData={setFormData}
                                                forVal={'medications'} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <FormLabel
                                                required={true}
                                                for={'allergies'}>
                                                Patient allergies
                                            </FormLabel>
                                            <FormInputNone
                                                formData={formData}
                                                setFormData={setFormData}
                                                forVal={'allergies'} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <FormLabel
                                                required={false}
                                                for={'comments'}>
                                                Please briefly tell us why you or your child require sedation or general anaesthesia for dental treatment.
                                            </FormLabel>
                                            <OtherComments
                                                formData={formData}
                                                setFormData={setFormData} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <FormMessage formData={formData} />
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
                                    </Row>
                                </form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div >
    )
}

export default MakeAppointmentMain