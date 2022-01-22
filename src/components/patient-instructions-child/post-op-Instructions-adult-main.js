import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './post-op-instructions-adult.module.scss'

const PostOpInstructionsAdultain = () => {
    return (
        <div className={styles.postOpInstructions}>
            <div className={styles.headlineSection}>
                <Container>
                <Row>
                    <Col>
                    <h1>Post-Operative Instructions - Adult</h1>
                    </Col>
                </Row>
                </Container>
                </div>
            <Container>
                <Row>
                    <Col lg={{span: 8, offset: 2}}>
                        <section>
                            <h2>What you had done</h2>
                            <p>You had dental treatment completed under sedation or general anaesthesia today.</p>
                        </section>
                        <section>
                            <h2>How it feels</h2>
                            <p>It is normal to feel and appear a bit tired (sleepy) after sedation. Patients are expected to stay under the anaesthesia team’s care until they have been formally dismissed by an anaesthesia team member.</p>
                            <ul>
                                <li>Soreness, mild swelling, bruising around the site of the intravenous (IV) needle is expected</li>
                                <li>Sore throat, mouth, jaw and tongue, as well as dry moth or dry throat may occur</li>
                                <li>Limited mouth opening may occur temporarily</li>
                            </ul>
                        </section>

                        <section>
                            <h2>Activities</h2>
                            <p>After your appointment, your motor coordination and cognitive function will be impaired. <span className={styles.redFont}>You must not operate a motor vehicle or machinery, manage finances, or use social media for 18 hours</span> or longer if dizziness/drowsiness persists. Patients often remain drowsy with poor reflexes or judgement even when feeling recovered from the medications. REST IS BEST.</p>
                        </section>
                        <section>
                            <h2>Monitoring</h2>
                            <p>Following the appointment, you should be <span className={styles.redFont}>closely monitored by a responsible adult</span> for the remainder of the day (6-8 hours following the appointment). This is to make sure you have completely recovered and you do not suffer a fall or injury while you may still be dizzy or groggy from the anaesthetic.
</p>
                            
                        </section>
                        <section>
                            <h2>Food & drink</h2>
                            <p>To prevent dehydration, you should:</p>
                            <ol>
                                <li>Have small <span className={styles.redFont}>sips of water or juice</span> as soon as possible after the appointment.</li>                                
                                <li>Proceed with solid food in moderation. Soft food at moderate or cool temperatures, with low fat are best after procedures (e.g. fruit smoothies, pudding, lukewarm soup). Nausea and vomiting is not common, but it may occur in some patients after the procedure. Please call our office if any nausea or vomiting lasts greater than 2 hours.</li>
                                <li>DO NOT CONSUME ALCOHOL for the remainder of the day.</li>
                            </ol>
                        </section>
                        <section>
                            <h2>Medications</h2>
                            <p>Resume all routine medications, unless specifically instructed otherwise by one of the doctors.</p>
                        </section>
                        <section>
                            <h2>Seek immediate advice:</h2>
                            <ol>
                                <li>If there is any difficulty with breathing.</li>
                                <li>If nausea or vomiting lasts more than 2 hours.</li>
                                <li>If you feel dizzy or drowsy 6-8 hours after surgery.</li>
                                <li>If any other matter concerns you.</li>
                            </ol>
                        </section>
                        <section style={{textAlign: 'center'}}>
                            <h2>Contact Dr. Soheil Khojasteh at <Link to='#'>(647) 980-7165</Link></h2>
                        </section>
                        

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostOpInstructionsAdultain