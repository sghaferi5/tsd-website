import * as React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'
import BirthDayInput from './birth-day-input'
// import form components
import FormFieldWrapper from './form-field-wrapper'
import FormLabel from './form-label'
import FormInputText from './form-input-text.js'
import EmailInput from './email-input'
import ContactPreference from './contact-preference'
import FormInputNone from './form-text-none'
import OtherComments from './other-comments'
import FormMessage from './form-message'
import FormInputPhone from './form-input-phone'

import * as styles from './make-appointment-main.module.scss'
import { useEffect } from 'react'


const MakeAppointmentMain = () => {

    const API_PATH = 'http://localhost:8888/api/contact/index.php'

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
        Object.entries(formData.values).forEach(entry => {
            const [key, value] = entry;
            if (key != 'birthday') {
                if (value.val == '' && value.isRequired)
                    newFormData.errors[key] = { message: 'This field is required', type: 'required' }
                newFormData.messageOnSubmit = { message: 'Error: Some fields are empty.', isError: 'true' }
                setFormData(newFormData)
            } else if (key === 'birthday') {
                var datesMissing = 0
                Object.entries(formData.values.birthday).forEach(dateValue => {
                    const [key, value] = dateValue;
                    if (value == '') {
                        datesMissing += 1
                    }
                })

                if (datesMissing === 3) {
                    newFormData.errors['birthday'] = { message: 'This field is required', type: 'required' }
                    newFormData.messageOnSubmit = { message: 'Error: Some fields are empty.', isError: 'true' }
                    setFormData(newFormData)
                }
            }
        });
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        errorCheck()



        // axios({
        //     method: 'POST',
        //     url: `${API_PATH}`,
        //     headers: { 'content-type': 'application/json' },
        //     data: formData.values
        // })
        //     .then(result => {
        //         setFormData({
        //             errors: {},
        //             values: { firstName: '', lastName: '' },
        //             mailSent: result.data.sent
        //         })
        //     })
        //     .catch(error => setFormData({
        //         errors: {},
        //         values: { firstName: '', lastName: '' },
        //         mailSent: error.sent,
        //         errorMsg: { error: error.message }
        //     }));
    };

    useEffect(() => {
    })



    return (
        <div class={styles.appointmentMain}>
            <div className={styles.appointmentContent}>
                <div className={styles.introSection}>
                    <Container>
                        <Row>
                            <Col lg={{ span: 8, offset: 2 }}>
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
                            <Col lg={{ span: 6, offset: 2 }}>
                                <form>
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
                                                forVal={'email'} />
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
                                                Please briefly tell us why you or your childrequire sedation or general anaesthesia for dental treatment.
                                            </FormLabel>
                                            <OtherComments
                                                formData={formData}
                                                setFormData={setFormData} />
                                        </FormFieldWrapper>
                                        <FormFieldWrapper>
                                            <FormMessage formData={formData} />
                                        </FormFieldWrapper>
                                        <Col lg={12}>
                                            <div className={styles.appointmentSubmit}>
                                                <input type="submit" onClick={e => handleFormSubmit(e)} value="Submit" />
                                            </div>
                                        </Col>
                                    </Row>
                                    <div>
                                        {formData.mailSent &&
                                            <div>Thank you for contcting us.</div>
                                        }
                                    </div>
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