import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import logoSvg from '../../../images/tsd_logo_navy.svg'

import * as styles from './desktop-footer.module.scss'

const DesktopFooter = () => {
    const inlineStyles = {
        containerEl: {
            height: '100%'
        },
        rowEl: {
            height: '100%',
            alignItems: 'center'
        }
    }
    return (
        <div className={styles.footerMain}>
            <Container>
                <Row>
                    <Col md={6} sm={12} xl={3}>
                        <div>
                            <div>
                                <Link to='/'>
                                    <img
                                        src={logoSvg}
                                        alt='Toronto Sleep Dentistry Logo'
                                        className={styles.footerLogo}
                                    />
                                </Link>
                            </div>

                            <ul style={
                                {
                                    marginTop: 10
                                }
                            }>
                                <li><a href='tel:4165355561'>416 535 5561</a></li>
                                <li><a href='mailto:info@416sleepdentistry.ca'>info@416sleepdentistry.ca</a></li>
                                <li><a href='
                                    https://www.google.com/maps/dir//1584+Bloor+St+W+Toronto,+ON+M6P+1A7/@43.6561466,-79.454577,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b343a09719cf3:0x19f18383411b289a!2m2!1d-79.454577!2d43.6561466
                                    '
                                    target="_blank">1584 Bloor Street West</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} sm={12} xl={3}>
                        <div className={styles.footerColWrapper}>
                            <h4>About</h4>
                            <ul>
                                <li>
                                    <Link to='/our-team'>
                                        Our Team
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link>
                                        Our Team
                                    </Link>
                                </li> */}
                                <li>
                                    <Link to='/about-sleep-dentistry'>
                                        About Sleep Dentistry
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} sm={12} xl={3}>
                        <div className={styles.footerColWrapper}>
                            <h4>For Patients</h4>
                            <ul>
                                <li>
                                    <Link to='/patient-information'>
                                        Patient Information
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/patient-instructions'>
                                        Patient Instructions
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </Col>
                    <Col md={6} sm={12} xl={3}>
                        <div className={styles.footerColWrapper}>
                            <h4>Contact</h4>
                            <ul>
                                <li>
                                    <Link to='/contact-us'>
                                        Contact Us
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/make-an-appointment'>
                                        Make an Appointment
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/referring-doctors'>
                                        Referring Doctors
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col><div className={styles.footerLine}></div></Col>
                </Row>
                <Row>
                    <Col>
                        <div className={styles.footerCopy}>
                            © 2022 Toronto Sleep Dentistry
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DesktopFooter
