import * as React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PageBanner from '../page-banner/page-banner'
import TeamMember from './team-member'
import Members from './team-data'
import * as styles from './our-team-main.module.scss'

const OurTeamMain = () => {

    return (
        <div>
            <PageBanner heading='Our Team' bgImage='our team' />
            <div className={styles.ourteamMain}>
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <TeamMember
                                name={Members.doctor.name}
                                info={Members.doctor}
                                thumbPhoto={Members.doctor.photo}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <TeamMember
                                name={Members.nurse.name}
                                info={Members.nurse}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <TeamMember
                                name={Members.nurse.name}
                                info={Members.nurse}
                            />
                        </Col>
                        <Col lg={3} md={6}>
                            <TeamMember
                                name={Members.nurse.name}
                                info={Members.nurse}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default OurTeamMain