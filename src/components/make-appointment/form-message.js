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
        opacity: formData.messageOnSubmit.message ? 1 : 0,
        transform: formData.messageOnSubmit.message ? `scale(1)` : `scale(0.98)`
    })

    return (
        formData.messageOnSubmit.message ? (
            <div className={styles.formMessage}>
                <animated.div style={animation}>
                    <p
                        ref={messageRef}
                        className={styles.errorMessage}>
                        {formData.messageOnSubmit.message}
                    </p>
                </animated.div>
            </div>
        ) : null
    )
}

export default FormMessage
