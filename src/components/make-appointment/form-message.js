import * as React from 'react'
import { useRef } from 'react'
import { useSpring, animated } from 'react-spring'

import * as styles from './form-message.module.scss'



const FormMessage = ({ formData }) => {
    const messageRef = useRef()

    const animation = useSpring({
        config: {
            duration: 150
        },
        opacity: formData.messageOnSubmit.message || formData.mailSent || formData.mailSent == false ? 1 : 1,
        transform: formData.messageOnSubmit.message ? `scale(1)` : `scale(0.98)`
    })

    const showMessage = () => {
        if (Object.keys(formData.errors).length > 0) {
            return (
                <div className={styles.formMessage}>
                    <animated.div style={animation}>
                        <p
                            // ref={messageRef}
                            className={`${styles.errorMessage} ${styles.message}`}>
                            Please check form entries.
                        </p>
                    </animated.div>
                </div>
            )
        } else if (formData.mailSent == true && Object.keys(formData.errors).length == 0) {
            return (
                <div className={styles.formMessage}>
                    <animated.div style={animation}>
                        <p
                            // ref={messageRef}
                            className={`${styles.successMessage} ${styles.message}`}>
                            Thank you, your form has been submitted. One of our team members will be contacting you within 24-48 hours.
                        </p>
                    </animated.div>
                </div>
            )
        } else if (formData.mailSent == false && Object.keys(formData.errors).length == 0) {
            return (
                <div className={styles.formMessage}>
                    <animated.div style={animation}>
                        <p
                            // ref={messageRef}
                            className={`${styles.errorMessage} ${styles.message}`}>
                            Sorry about the inconvinience, something went wrong. Plase contact our clinic to schedule an appointment.
                        </p>
                    </animated.div>
                </div>
            )
        } else {
            return null
        }

    }

    return (
        <div>
            {showMessage()}
        </div>
    )
}

export default FormMessage
