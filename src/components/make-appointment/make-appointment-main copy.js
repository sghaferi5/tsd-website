import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BirthDayInput from './birth-day-input'
import * as styles from './make-appointment-main.module.scss'

const MakeAppointmentMain = () => {


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
                                <form method="post" action="#">
                                    <Row>
                                        <Col lg={12}>
                                            <label
                                                className={styles.formLabel}
                                                htmlFor="first-name">Patient First Name <span className={styles.formReqd}>*</span>
                                            </label>
                                            <input
                                                type='text'
                                                id='first-name'
                                                className={styles.formControl}>
                                            </input>
                                        </Col>
                                        <Col lg={12}>
                                            <label
                                                className={styles.formLabel}
                                                htmlFor="last-name">Patient Last Name <span className={styles.formReqd}>*</span>
                                            </label>
                                            <input
                                                type='text'
                                                id='last-name'
                                                className={styles.formControl}>
                                            </input>
                                        </Col>

                                        <BirthDayInput />

                                        <Col lg={12}>
                                            <label
                                                className={styles.formLabel}
                                                htmlFor="legal-guardian-name">Name of Legal Guardian
                                            </label>
                                            <input
                                                type='text'
                                                id='legal-guardian-name'
                                                className={styles.formControl}>
                                            </input>
                                        </Col>
                                        <Col lg={12}>
                                            <label
                                                className={styles.formLabel}
                                                htmlFor="primary-phone">Primary Phone Number <span className={styles.formReqd}>*</span>
                                            </label>
                                            <input
                                                type='text'
                                                id='primary-phone'
                                                className={styles.formControl}>
                                            </input>
                                        </Col>
                                        <Col lg={12}>
                                            <label
                                                className={styles.formLabel}
                                                htmlFor="alternate-phone">Alternate Phone Number
                                            </label>
                                            <input
                                                type='text'
                                                id='alternate-phone'
                                                className={styles.formControl}>
                                            </input>
                                        </Col>
                                        <Col lg={12}>
                                            <label
                                                className={styles.formLabel}
                                                htmlFor="email">Email <span className={styles.formReqd}>*</span>
                                            </label>
                                            <input
                                                type='text'
                                                id='email'
                                                className={styles.formControl}>
                                            </input>
                                        </Col>
                                        <Col lg={12}>
                                            <p>
                                                Please advise how you would like to be contacted <span className={styles.formReqd}>*</span>
                                            </p>
                                            <div className={styles.inputBlock}>
                                                <input
                                                    type='radio'
                                                    value='Email'
                                                    name='prefer-contact'
                                                    id='email-contact' />
                                                <label htmlFor='email-contact'>Email</label>

                                                <input
                                                    type='radio'
                                                    name='prefer-contact'
                                                    value='Phone'
                                                    id='phone-contact' />
                                                <label htmlFor='phone-contact'>Phone</label>
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <p>
                                                Patient medical conditions <span className={styles.formReqd}>*</span>
                                            </p>
                                            <div className={`${styles.inputBlock} ${styles.medicalConditions}`}>

                                                <label htmlFor='medical-conditions-bool'>
                                                    <input
                                                        type='checkbox'
                                                        name='medical-conditions-bool'
                                                        value='None'
                                                        id='medical-conditions-bool' />
                                                    None</label>
                                                <input type='text' className={styles.formControl} />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <p>
                                                Patient medications <span className={styles.formReqd}>*</span>
                                            </p>
                                            <div className={`${styles.inputBlock} ${styles.medicalConditions}`}>

                                                <label htmlFor='medical-conditions-bool'>
                                                    <input
                                                        type='checkbox'
                                                        name='medical-conditions-bool'
                                                        value='None'
                                                        id='medical-conditions-bool' />
                                                    None</label>
                                                <input type='text' className={styles.formControl} />
                                            </div>
                                        </Col>
                                        <Col lg={12}>
                                            <p>
                                                Patient allergies <span className={styles.formReqd}>*</span>
                                            </p>
                                            <div className={`${styles.inputBlock} ${styles.medicalConditions}`}>

                                                <label htmlFor='medical-conditions-bool'>
                                                    <input
                                                        type='checkbox'
                                                        name='medical-conditions-bool'
                                                        value='None'
                                                        id='medical-conditions-bool' />
                                                    None</label>
                                                <input type='text' className={styles.formControl} />
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