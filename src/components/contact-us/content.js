import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'gatsby'

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
                                    <p>Book your appointment with Toronto Sleep Dentistry today by calling our office or filling out our <Link to='/make-an-appointment/'>online form</Link>. </p>
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
                                        <li>Phone:<a href='tel:4165355561'> 416 535 5561</a></li>
                                        <li>Fax: 416 535 2876</li>
                                        <li>Email: <a href='mailto:info@416sleepdentistry.ca'>info@416sleepdentistry.ca</a></li>
                                    </ul>
                                </Col>
                                <Col
                                    className={styles.colSection}
                                    lg={4}>
                                    <h2>Address</h2>
                                    <a href='
                                    https://www.google.com/maps/dir//1584+Bloor+St+W+Toronto,+ON+M6P+1A7/@43.6561466,-79.454577,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b343a09719cf3:0x19f18383411b289a!2m2!1d-79.454577!2d43.6561466
                                    '
                                        target="_blank">
                                        <p>
                                            1584 Bloor Street W,<br />
                                            Toronto, ON M6P 1A7
                                        </p>
                                    </a>
                                </Col>
                                <Col
                                    className={styles.colSection}
                                    lg={12}>
                                    <Link to='/make-an-appointment/'><button>Make an Appointment</button></Link>
                                    <a href='
                                    https://www.google.com/maps/dir//1584+Bloor+St+W+Toronto,+ON+M6P+1A7/@43.6561466,-79.454577,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b343a09719cf3:0x19f18383411b289a!2m2!1d-79.454577!2d43.6561466
                                    '
                                        target="_blank"><button>Get Directions</button></a>
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