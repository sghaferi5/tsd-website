import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './content.module.scss'

const Content = () => {
    return (
        <div className={styles.contentMain}>
            <Container>
                <Row>
                    <Col lg={12} xl={{ span: 8, offset: 2 }}>
                        <Container>
                            <Row>
                                <Col
                                    className={styles.colSection}
                                    lg={12}>
                                    <p>Book your appointment with Toronto Sleep Dentistry today by calling out office out our online form. </p>
                                </Col>
                                <Col
                                    className={styles.colSection}
                                    lg={4}>
                                    <h2>Office Hours</h2>
                                    <ul>
                                        <li>Monday - Friday</li>
                                        <li>8:00 AM - 4:30 PM</li>
                                    </ul>
                                </Col>
                                <Col
                                    className={styles.colSection}
                                    lg={4}>
                                    <h2>Get In Touch</h2>
                                    <ul>
                                        <li>Phone: 416.456.3219</li>
                                        <li>Fax: 416.456.3219</li>
                                        <li>Email: info@416sleepdentistry.com</li>
                                    </ul>
                                </Col>
                                <Col
                                    className={styles.colSection}
                                    lg={4}>
                                    <h2>Address</h2>
                                    <p>
                                        1584 Bloor Street W,<br />
                                        Toronto, ON M6P 1A7
                                    </p>
                                </Col>
                                <Col
                                    className={styles.colSection}
                                    lg={12}>
                                    <button>Make an Appointment</button>
                                    <button>Get Directions</button>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={12}>
                        <div className={styles.contactMap}>
                            <iframe
                                className={styles.googleMap}
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.6165031723217!2d-79.45676568443008!3d43.656146579121234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b343a09719cf3%3A0x19f18383411b289a!2s1584%20Bloor%20St%20W%2C%20Toronto%2C%20ON%20M6P%201A7!5e0!3m2!1sen!2sca!4v1641678781734!5m2!1sen!2sca" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy">
                            </iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Content