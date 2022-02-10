import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './post-op-instructions–pediatric.module.scss'

const PostOpInstructionsChildMain = () => {
    return (
        <div className={styles.postOpInstructions}>
            <div className={styles.headlineSection}>
                <Container>
                    <Row>
                        <Col>
                            <h1>Post-Operative Instructions - Child</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <section>
                            <h2>What your child had done</h2>
                            <p>Your child had restorations (fillings, crowns/caps) and/or extractions completed under general anaesthesia today.</p>
                        </section>
                        <section>
                            <h2>Activities</h2>
                            <p>Your child should be monitored by a responsible adult for the remainder of the day (6-8 hours following the appointment). This is to make sure they have completely recovered and they do not suffer a fall or injury while they may still be dizzy or groggy from the anaesthetic.</p>
                            <p>Your child must rest at home and is not allowed to ride a bike or play outside for the remainder of the day.</p>
                        </section>

                        <section>
                            <h2>Local anaesthesia (freezing)</h2>
                            <p>If your child had local anaesthesia (dental freezing), please be aware your child may be numb for 2-4 hours after surgery. Please monitor your child to prevent biting of soft tissues such as lips, cheeks and tongue.
                            </p>
                        </section>
                        <section>
                            <h2>Food & drink</h2>
                            <p>To ensure your child is properly hydrated, your child should:</p>
                            <ol>
                                <li>Have small sips of water or apple juice as soon as possible after the appointment.</li>
                                <li>Proceed with solid food in moderation. Soft food at moderate or cool temperatures, with low fat, are best after procedures (e.g. fruit smoothies, pudding, lukewarm soup). Nausea and vomiting is not common, but it may occur in some patients after the procedure. Please call our office if any nausea or vomiting lasts greater than 2 hours.
                                </li>
                            </ol>
                        </section>
                        <section>
                            <h2>Pain Control</h2>
                            <p>If your child appears to be in pain after the procedure, you may give:</p>
                            <ol>
                                <li>Tylenol at (will be discussed on day of surgery)</li>
                                <p style={{
                                    fontWeight: 600,
                                    fontSize: '1.8rem'
                                }}>OR</p>
                                <li>Advil at (will be discussed on day of surgery)</li>
                            </ol>
                        </section>
                        <section>
                            <p>If any matter concerns you please feel free to call out office at <a href='tel:4165355561'>416-535-5561</a></p>
                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default PostOpInstructionsChildMain