import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import referringDocIcon from '../../images/user-line.svg'
import schedulingIcon from '../../images/calendar-line.svg'
import walletIcon from '../../images/wallet-line.svg'
import lockIcon from '../../images/lock-line.svg'
import cameraIcon from '../../images/camera-line.svg'
import safetyIcon from '../../images/shield-user-line.svg'





import * as styles from './main-content.module.scss'


const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Container>
                <div className={styles.sectionTop}>
                    <Row>
                        <Col>
                            <Row className={styles.colLineDivider}>
                                <Col
                                    sm={12}
                                    className={styles.colPadded}>
                                    <div>
                                        <img src={referringDocIcon} />
                                        <h2>Working with your referring doctor</h2>
                                    </div>
                                    <p>If you are being referred to Toronto Sleep Dentistry by your family dental office, your family dentist will be securely sending us the pertinent information relating to you or your child’s treatment needs. They will also send us any relevant radiographs (X-Rays) that may be available. We work closely with your family dental office to ensure we have all of the necessary information to provide the best possible care to you or your child.</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col
                                    sm={12}
                                    className={`${styles.colPadded} ${styles.colTopMargin}`}>
                                    <div>
                                        <img src={cameraIcon} />
                                        <h2>X-Rays</h2>
                                    </div>
                                    <p>Your family dentist will usually send us any relevant X-rays that they have at the time that they refer you to our office. If additional X-rays are needed, we can take them at the time of your consultation. If you have a severe gag reflex, X-rays can be taken asleep during your treatment appointment as well. For small children, X-rays are also usually taken after they are asleep, so we can achieve high quality images of your child’s teeth.</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            sm={12}
                            md={6}
                            className={`${styles.colPadded} ${styles.mMarginTop}`}>
                            <div>
                                <img src={schedulingIcon} />
                                <h2>Scheduling</h2>
                            </div>
                            <p>Sleep Dentistry requires an initial consultation appointment prior to the appointment where you or your child are put to sleep for dental treatment. This is so the doctor can review important information about you or your child’s medical history, and also to review important instructions prior to having sedation or general anaesthesia. For this reason, your first visit with us will be a consultation appointment, where you meet your doctor and our staff, and review important information prior to your sleep dentistry treatment appointment.</p>
                            <p>If you are being referred to Toronto Sleep Dentistry by your family dental office, your dentist will send us a referral slip with your contact information, and we will contact you directly to book your initial consultation appointment with us. Of course, you are also always welcome to call our office at 416-535-5561 to book a consultation appointment for yourself or your child. You can also fill out our online form to request an appointment. We look forward to hearing from you</p>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col
                        sm={12}
                        md={6}
                        className={styles.colPadded}>
                        <div>
                            <img src={walletIcon} />
                            <h2>Financial Information</h2>
                        </div>
                        <p>Our office follows the fee guide of the Ontario Dental Association for Specialists, meaning we offer exceptional treatment at reasonable prices set by the Ontario Dental Association. We accept all payment methods except for personal cheques. The payment methods we accept are Visa, Mastercard, American Express, Cash, or Debit. Full payment is due at the end of your dental appointment.</p>
                    </Col>
                    <Col
                        sm={12}
                        md={6}
                        className={`${styles.colPadded} ${styles.mMarginTop}`}>
                        <div>
                            <img src={lockIcon} />
                            <h2>Patient Privacy</h2>

                        </div>
                        <p>At Toronto Sleep Dentistry, we respect your privacy and we follow federal guidelines to ensure your information is kept safe and your privacy is not breached. To read our complete patient privacy document, click <Link to='#'>here</Link></p>
                    </Col>
                    <Col
                        sm={12}
                        md={6}
                        className={`${styles.colPadded}`}
                        style={{
                            marginTop: '4.2rem'
                        }}>
                        <div>
                            <img src={safetyIcon} />
                            <h2>Patient Safety</h2>

                        </div>
                        <p>Sleep Dentistry is a very safe and low risk procedure. Please visit our “About Sleep Dentistry” page and read the entire section on the safety profile of sleep dentistry by clicking <Link to='/about-sleep-dentistry'>here</Link>.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainContent