import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './pre-op-instructions–adult.module.scss'

const PreOpInstructionsAdultMain = () => {
    return (
        <div className={styles.preOpInstructions}>
            <div className={styles.headlineSection}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Pre-Operative Instructions – Adult Patients</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <section>
                            <h2>Food & Drink</h2>
                            <p>No food or drink is permitted on the day of the appointment. Do not have any solid food or drink after midnight the night before. The only exception is that water, apple juice, or Gatorade <span className={styles.redFont}>(NOT orange juice or milk)</span> are allowed up to 3 hours before your appointment. <span className={styles.redFont}>You must have an empty stomach to avoid vomiting during anaesthesia.</span></p>
                        </section>
                        <section>
                            <h2>Sickness/illness</h2>
                            <p>
                                If a new cough, cold, flu, fever, or respiratory illness, or illness requiring antibiotics has occurred in the 2 weeks prior to the appointment, please call our office and let us know.
                            </p>
                        </section>
                        <section>
                            <h2>What to wear</h2>
                            <p>Wear loose, comfortable clothing. No nail polish or jewelry to be worn.</p>
                        </section>
                        <section>
                            <h2>Getting Home</h2>
                            <p><span className={styles.redFont}>You are not allowed to drive following the appointment and taking public transportation is not allowed.</span> You must have a responsible adult to accompany you home after the appointment. You can go home in either a private vehicle or a taxi/Uber. <span className={styles.redFont}>You must go directly to a place where you can rest and recover. </span></p>
                        </section>
                        <section>
                            <h2>Medications</h2>
                            <p>Take all regular medications at their usual time, with only small sips of water. In rare instances, you may be asked not to take a certain medication.</p>
                        </section>
                        <section>
                            <h2>Cancellation Policy</h2>
                            <p>One week notice is appreciated to cancel an appointment, and 48 hours notice is required to cancel your appointment.</p>
                        </section>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PreOpInstructionsAdultMain