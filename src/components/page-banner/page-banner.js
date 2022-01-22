import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './page-banner.module.scss'

const PageBanner = (props) => {

    const data = useStaticQuery(
        graphql`
          query {
            patientInformationImage: file(relativePath: { eq: "Patient-Information-2.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
            }

            patientInstructionsImage: file(relativePath: { eq: "Patient-Instructions.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
            }

            ourTeamImage: file(relativePath: { eq: "our-team.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
            }

            aboutSleepDentistryImage: file(relativePath: { eq: "about-sleep-dentistry.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
            }

            contactUsImage: file(relativePath: { eq: "contact-us.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
            }

            referringDoctorsImage: file(relativePath: { eq: "referring-doctors.jpg" }) {
                childImageSharp {
                    fluid(quality: 100) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
            }

          }
        `)



    const patientInformationImageData = data.patientInformationImage.childImageSharp.fluid
    const patientInstructionsImageData = data.patientInstructionsImage.childImageSharp.fluid
    const ourTeamImageData = data.ourTeamImage.childImageSharp.fluid
    const aboutSleepDentistryImageData = data.aboutSleepDentistryImage.childImageSharp.fluid
    const contactUsImageData = data.contactUsImage.childImageSharp.fluid
    const referringDoctorsImageData = data.referringDoctorsImage.childImageSharp.fluid



    switch (props.bgImage) {
        case 'patient information':
            return (
                <div>
                    <BackgroundImage
                        Tag="section"
                        fluid={patientInformationImageData}
                        backgroundColor={`#040e18`}
                    >
                        <div className={styles.pageBanner}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{props.heading}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </BackgroundImage>
                </div>
            )
        case 'patient instructions':
            return (
                <div>
                    <BackgroundImage
                        Tag="section"
                        fluid={patientInstructionsImageData}
                        backgroundColor={`#040e18`}
                    >
                        <div className={styles.pageBanner}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{props.heading}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </BackgroundImage>
                </div>
            )
        case 'our team':
            return (
                <div>
                    <BackgroundImage
                        Tag="section"
                        fluid={ourTeamImageData}
                        backgroundColor={`#040e18`}
                    >
                        <div className={styles.pageBanner}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{props.heading}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </BackgroundImage>
                </div>
            )
        case 'about sleep dentistry':
            return (
                <div>
                    <BackgroundImage
                        Tag="section"
                        fluid={aboutSleepDentistryImageData}
                        backgroundColor={`#040e18`}
                    >
                        <div className={styles.pageBanner}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{props.heading}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </BackgroundImage>
                </div>
            )
        case 'contact us':
            return (
                <div>
                    <BackgroundImage
                        Tag="section"
                        fluid={contactUsImageData}
                        backgroundColor={`#040e18`}
                    >
                        <div className={styles.pageBanner}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{props.heading}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </BackgroundImage>
                </div>
            )
        case 'referring doctors':
            return (
                <div>
                    <BackgroundImage
                        Tag="section"
                        fluid={referringDoctorsImageData}
                        backgroundColor={`#040e18`}
                    >
                        <div className={styles.pageBanner}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{props.heading}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </BackgroundImage>
                </div>
            )
        default:
            return (
                <div>
                    <BackgroundImage
                        Tag="section"
                        fluid={aboutSleepDentistryImageData}
                        backgroundColor={`#040e18`}
                    >
                        <div className={styles.pageBanner}>
                            <Container>
                                <Row>
                                    <Col>
                                        <h1>{props.heading}</h1>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </BackgroundImage>
                </div>
            )
    }

}

export default PageBanner
