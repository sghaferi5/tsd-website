import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './pre-op-instructions–pediatric.module.scss'

const PreOpInstructionsChildMain = () => {
    return (
        <div className={styles.preOpInstructions}>
            <div className={styles.headlineSection}>
                <Container>
                <Row>
                    <Col>
                    <h1>Pre-Operative Instructions – Pediatric Patients</h1>
                    </Col>
                </Row>
                <Row>
                <Col>
                        <h2>FOLLOW THESE INSTRUCTIONS TO KEEP YOUR CHILD SAFE!</h2>
                    </Col>
                </Row>
                </Container>
                </div>
            <Container>
                <Row>
                    <Col lg={{span: 8, offset: 2}}>
                        <section>
                            <h2>Food & Drink</h2>
                            <p>No food or drink is permitted on the day of the appointment. Do not have any solid food or drink after midnight the night before. <span className={styles.redFont}>Your child must have an empty stomach to avoid vomiting during anaesthesia.</span></p>
                        </section>
                        <section>
                            <h2>Sickness/illness</h2>
                            <p>
                            If a new cough, cold, flu, fever, or respiratory illness, or illness requiring antibiotics has occurred in the 2-3 weeks prior to the appointment, please call our office and let us know. Please call (NAME HERE) to speak with our office.
                            </p>                            
                        </section>

                        <section>
                            <h2>Arriving</h2>
                            <p>A parent or legal guardian must bring the child to the appointment.</p>
                        </section>
                        <section>
                            <h2>What to wear</h2>
                            <p>Dress your child in loose comfortable clothing. Bring a spare change of clothing. For young children, use a diaper or bring a diaper the day of the appointment. No pants with attached socks please and <span className={styles.redFont}>no nail polish.</span></p>
                        </section>
                        <section>
                            <h2>Getting Home</h2>
                            <p><span className={styles.redFont}>Taking public transportation is not allowed.</span> Your child can go home in either a private vehicle or a taxi/Uber. <span className={styles.redFont}>Your child must be secured in a car seat and seatbelt during transport. They must go directly to a place where they can rest and recover.</span>
                            </p>
                        </section>
                        <section>
                            <h2>Puffers (if applicable)</h2>
                            <p>Please follow the instructions given by the anaesthesia doctor regarding your child’s puffer use. Please bring puffers with your child on the day of the appointment.</p>
                        </section>
                        <section>
                            <h2>Cancellation Policy</h2>
                            <p>One week notice is appreciated to cancel an appointment, and 48 hours notice is required to cancel your appointment. <span className={styles.redFont}>Cancellations with less than 48 hours notice will result in a $250 charge.</span> Your child’s treatment may be delayed and future appointments may be cancelled.</p>
                        </section>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PreOpInstructionsChildMain