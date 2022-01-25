import * as React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Container, Row, Col } from 'react-bootstrap'
import * as styles from './meet-your-doctor-main.module.scss'

const DoctorMeet = () => {
    return (
        <div className={styles.DoctorMain}>
            <Container className={styles.border}>
                <Row>
                    <Col sm={12} md={12} lg={6}>
                        <div className={styles.info}>
                            <div className={styles.meetHeading}>Meet Your Doctor</div>
                            <div className={styles.bioPhoto}>
                                <StaticImage src="../../images/full-bio-photo.jpg" alt="" />
                            </div>
                            <h1>Dr. Soheil Khojasteh</h1>
                            <p>BHSc, DDS, MSc, Diplomate ADBA</p>
                            <p>Specialist in Dental Anaesthesiology</p>

                        </div>

                    </Col>

                    <Col sm={12} md={12} lg={6}>
                        <div className={styles.bioBody}>
                            <p>My goal is to provide you with safe, comfortable, and quality dental treatment. I believe that a healthy mouth is
                                fundamental to overall health, and a beautiful smile will help make you feel your best. I understand that many people
                                do not particularly enjoy having dental treatment with freezing while they are wide awake, which is why we offer a
                                range of sedation options to ensure you have an easy and stress-free dental appointment. Our office is equipped with
                                state-of-the-art equipment and experienced staff. Below, you will find a summary of my clinical training and
                                experience. If you have any questions, please contact us at Toronto Sleep Dentistry.</p>

                            <h2>Degrees, Certificates, and Awards</h2>
                            <ul>
                                <li>Specialist Certificate in Dental Anaesthesiology, RCDSO – one of only 50 in Canada</li>
                                <li>Anaesthesia Degree, University of Toronto, Hospital for Sick Children, Sunnybrook Health Sciences Centre &
                                    Michael Garron Hospital 2014 - 2017</li>
                                <li>Doctor of Dental Surgery, University of Toronto 2010 - 2014 with Honours</li>
                                <li>Bachelor of Health Sciences, McMaster University 2008 - 2010</li>
                                <li>Diplomate of the American Dental Board of Anesthesiology</li>
                                <li>Gold Medal for Anaesthesia, University of Toronto</li>
                                <li>Dental Awards in Pharmacology, Endodontics, and Community Service, University of Toronto</li>
                                <li>Advanced Cardiac Life Support & Pediatric Advanced Life Support certified</li>
                                <li>Implant Fellowship Program, New York University – 2019</li>
                                <li>TiMax Implant Program, TiMax Institute – 2019   </li>
                            </ul>

                            <h2>Teaching Commitments</h2>
                            <p>My teaching commitments involve educating the students at the University of Toronto, as well as providing continuing
                                dental education to my fellow colleagues in dentistry.</p>
                            <ul style={{ marginTop: '0.8rem' }}>
                                <li>Faculty of Dentistry, University of Toronto</li>
                                <li>Continuing education presentations to the American Society of Dentist Anaesthesiologist, Canadian Academy of
                                    Dental Anaesthesia, Ontario Dental Society of Anaesthesia, Ace Dental Institute, University of Toronto
                                    Continuing Education Department, and Societies of the Ontario Dental Association</li>
                            </ul>

                            <h2>Professional Affiliations</h2>
                            <ul>
                                <li>Professional Affiliations • Ontario Dental Association</li>
                                <li>Ontario Dental Society of Anaesthesia – President, 2022</li>
                                <li>Canadian Academy of Dental Anaesthesia – Executive Committee Member</li>
                                <li>American Society of Dental Anaesthesia</li>
                            </ul>

                            <h2>Life Outside the Office</h2>
                            <p>Most of my time away from work is spent with my wife, Monica, and our son, Kian. We enjoy spending time
                                outdoors and I especially enjoy spending time on my road bike. My favorite thing to do at home is
                                experimenting with new recipes and reading with my son.</p>

                        </div>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DoctorMeet