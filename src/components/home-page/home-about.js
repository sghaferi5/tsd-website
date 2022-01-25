import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './home-about.module.scss'

const HomeAbout = () => {
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
        <div className={styles.homeAbout}>
            <Container>
                <Row>
                    <Col lg={{ span: 8, offset: 2 }}>
                        <h2>About Us</h2>
                        <p>
                            At Toronto Sleep Dentistry, we offer dental treatment under all modalities of sedation, including general anaesthesia. We are specialists in dental anaesthesia, and we treat patients of all ages and we offer a variety of dental procedures to our patients while they are sedated and relaxed or completely ASLEEP! Learn more <Link to="about-sleep-dentistry">here</Link>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeAbout
