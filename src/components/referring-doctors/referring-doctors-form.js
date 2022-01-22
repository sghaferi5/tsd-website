import * as React from 'react'
import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import axios from 'axios'

// import form components
import FormFieldWrapper from '../make-appointment/form-field-wrapper'
import BirthDayInput from '../make-appointment/birth-day-input'
import FormLabel from '../make-appointment/form-label'
import FormInputText from '../make-appointment/form-input-text.js'
import EmailInput from '../make-appointment/email-input'
import ContactPreference from '../make-appointment/contact-preference'
import FormInputNone from '../make-appointment/form-text-none'
import OtherComments from '../make-appointment/other-comments'
import FormMessage from '../make-appointment/form-message'
import FormInputPhone from '../make-appointment/form-input-phone'
import FormSelectList from './form-select-list'
import ReasonForReferral from './reason-for-referral'
import Radiographs from './radiograph'


// import styles
import * as styles from './referring-doctors-form.module.scss'


const ReferringDoctorsForm = () => {

    const [formData, setFormData] = useState({
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
            referralReason: { val: [], isRequired: false },
            radiograph: { val: '', isRequired: false },
        },
        messageOnSubmit: {}
    })

    return (
        <div className={styles.rdForm}>
            <Container>

                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <Row>
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
                                    { for: 'ow', value: 'OW' },
                                    { for: 'odsp', value: 'ODSP' },
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
                            <Col lg={12}>
                                <div className={styles.referralSubmit}>
                                    <input type="submit" value="Submit" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ReferringDoctorsForm