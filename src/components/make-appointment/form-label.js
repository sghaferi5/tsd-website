import * as React from 'react'
import * as styles from './form-label.module.scss'

const FormLabel = (props) => {
    return (
        props.required ? (
            <label
                className={styles.formLabel}
                htmlFor={props.for}>
                {props.children}<span> *</span>
            </label>

        ) : (
            <label
                className={styles.formLabel}
                htmlFor={props.for}>
                {props.children}
            </label>
        )
    )

}
export default FormLabel