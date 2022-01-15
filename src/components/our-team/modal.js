import * as React from 'react'
import { Link } from 'gatsby'
import { useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { Container, Row, Col } from 'react-bootstrap'
import { StaticImage } from "gatsby-plugin-image"

import * as styles from './modal.module.scss'

import Close from '../../images/close-fill.svg'


const Modal = ({ showModal, setShowModal, memberInfo }) => {
    const modalRef = useRef()
    const closeBtnRef = useRef()

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 1,
        transform: showModal ? `scale(1)` : `scale(0.95)`
    })

    const animateContent = useSpring({
        delay: 250,
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0)` : `translateY(-30px)`
    })

    const closeModal = e => {
        if (modalRef.current === e.target || closeBtnRef.current === e.target) {
            setShowModal(false)
            document.body.style.overflow = null
        }
    }

    const keyPress = useCallback(e => {
        if (e.key === 'Escape' && showModal) {
            setShowModal(false)
            document.body.style.overflow = null
        }
    }, [setShowModal, showModal])

    const outPutData = () => {
        const data = JSON.parse(memberInfo)
        return (
            <div>
                <div className={styles.headingBlock}>
                    <h1>{data.name}</h1>
                    {data.designation.map((designation) => {
                        return <p>{designation}</p>
                    })}
                </div>
                <div className={styles.modalBio}>
                    {data.fullBio.map((paragraph) => {
                        return <p>{paragraph}</p>
                    })}
                </div>
                {data.bioLink ? (
                    <p className={styles.fullBioMsg}>{data.bioLink}
                        <Link
                            onClick={() => document.body.style.overflow = null}
                            to='/our-team/meet-your-doctor'>click here</Link>.</p>
                ) : null}
            </div>
        )
    }



    useEffect(() => {
        document.addEventListener('keydown', keyPress)

        if (window.history && window.history.pushState) {
            document.body.style.overflow = null
        }

        return () => document.removeEventListener('keydown', keyPress)

    }, [keyPress]
    )



    return (
        showModal ? (
            <div className={styles.modal} ref={modalRef} onClick={closeModal}>
                <animated.div style={animation}>
                    <div className={styles.modalDialog}>
                        <animated.div style={animateContent}>
                            <div className={styles.modalContent}>
                                <Container>
                                    <Row>
                                        <Col>
                                            <div className={styles.closeBtn}>
                                                <img src={Close} ref={closeBtnRef} />
                                            </div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={{ span: 4 }}>
                                            <div className={styles.photoWrap}>
                                                <StaticImage src="../../images/our-team-doctor.jpg" alt="" />
                                            </div>
                                        </Col>
                                        <Col style={{
                                            padding: '0 3.2rem'
                                        }}>
                                            {outPutData()}
                                        </Col>
                                    </Row>
                                </Container>

                            </div>
                        </animated.div>
                    </div>
                </animated.div>
            </div >
        )
            : null

    )
}

export default Modal