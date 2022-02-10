import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

// import components
import PageBanner from '../page-banner/page-banner'
import ReferringDoctorsForm from './referring-doctors-form'

import * as styles from './referring-doctors-main.module.scss'


const ReferringDoctorsMain = () => {
    return (
        <div>
            <PageBanner heading='Referring Doctors' bgImage='referring doctors' />
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <div className={styles.referringIntro}>
                            <p>Referring doctors can securely and easily refer patients to Toronto Sleep Dentistry by completing the form below. Please complete this Online Referral Form and press submit once finished. If you prefer, you can also call our office to refer your patient. We thank you for your confidence in our team and look forward to providing exceptional care for your patients.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ReferringDoctorsForm />
        </div>
    )
}

export default ReferringDoctorsMain