import * as React from 'react'
// import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './main-content.module.scss'

import TableOfContents from './table-of-contents'
import Content from './content'

const MainContent = () => {
    return (
        <div>
            <div className={styles.mainContent}>
                <Container>
                    <Row>
                        <TableOfContents />
                        <Col>
                            <Content />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MainContent