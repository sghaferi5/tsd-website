import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './main-content.module.scss'


const MainContent = () => {
    return (
        <div className={styles.mainContent}>
            <Container>
                <Row>
                    <Col>
                        <div className={styles.mainTop}>
                            <p>Before and after your sleep dentistry appointment, there are some important instructions which must be followed, so we can ensure you have the a safe and successful procedure. We review these instructions in detail with you during your consultation appointment, but you can also find our written anaesthesia pre-operative and pos-operative instructions below.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className={styles.btmSection}>
                    <Col md={{ span: 4, offset: 2 }} className={styles.btmSectionBlock}>
                        <h2>Children's Instructions</h2>
                        <Link to='#'>Before your appointment</Link>
                        <Link to='#'>Following your appointment</Link>
                    </Col>
                    <Col md={{ span: 4 }} className={styles.btmSectionBlock}>
                        <h2>Adult Instructions</h2>
                        <Link to='#'>Before your appointment</Link>
                        <Link to='#'>Following your appointment</Link>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}

export default MainContent