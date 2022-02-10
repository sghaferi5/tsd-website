import * as React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import BackgroundImage from 'gatsby-background-image'

import * as styles from './home-hero.module.scss'

const MainHero = () => {
    const { placeholderImage } = useStaticQuery(
        graphql`
          query {
            placeholderImage: file(relativePath: { eq: "hero-bg.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
            }
          }
        `
    )
    const imageData = placeholderImage.childImageSharp.fluid


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
        <BackgroundImage
            Tag="section"
            className={styles.heroSectionBlock}
            style={{ overflowX: 'hidden' }}
            fluid={imageData}
        >
            <div className={styles.hero}>
                <div className={styles.heroBanner}>
                    <h2>Opening spring 2022</h2>
                </div>
                <Container className={styles.customContainer}>
                    <Row style={{ height: '100%' }}>
                        <Col>
                            <div className={styles.containerWrap}>
                                <h1 className={styles.largeHeading}>Specialists In <br />Dental Anaesthesia</h1>

                                <h1 className={styles.mediumHeading}>Specialists In <br />Dental Anaesthesia</h1>
                                <h1 className={styles.mobileHeading}>Specialists <br />In Dental <br />Anaesthesia</h1>
                                <h2>Treating both children and adults</h2>
                                <ul className={styles.heroInfo}>
                                    <li>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /></svg>
                                            <a href='
                                    https://www.google.com/maps/dir//1584+Bloor+St+W+Toronto,+ON+M6P+1A7/@43.6561466,-79.454577,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x882b343a09719cf3:0x19f18383411b289a!2m2!1d-79.454577!2d43.6561466
                                    '
                                                target="_blank">1584 Bloor Street West</a>
                                        </div>

                                    </li>
                                    <li>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9.06 8.683L5.648 6.238 4.353 7.762l7.72 6.555 7.581-6.56-1.308-1.513-6.285 5.439z" /></svg>
                                            <a href="mailto:info@416sleepdentistry.ca">info@416sleepdentistry.ca</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0z" /><path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.794.046-1.07.046-8.837 0-16-7.163-16-16 0-.276.015-.633.046-1.07A1 1 0 0 1 4.044 3H7.58a.5.5 0 0 1 .498.45c.023.23.044.413.064.552A13.901 13.901 0 0 0 9.35 8.003c.095.2.033.439-.147.567l-2.158 1.542a13.047 13.047 0 0 0 6.844 6.844l1.54-2.154a.462.462 0 0 1 .573-.149 13.901 13.901 0 0 0 4 1.205c.139.02.322.042.55.064a.5.5 0 0 1 .449.498z" /></svg>
                                            <a href="tel:4165355561">416 535 5561</a>
                                        </div>
                                    </li>
                                </ul>
                                <ul className={styles.actionBtn}>
                                    <li> <Link to='/make-an-appointment'><button>Book An Appointment</button></Link></li>
                                    <li> <Link to='/referring-doctors'><button>Referring Doctors</button></Link></li>
                                </ul>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </BackgroundImage>
    )
}

export default MainHero
