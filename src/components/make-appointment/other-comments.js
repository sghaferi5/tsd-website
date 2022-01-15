import * as React from 'react'
import * as styles from './other-comments.module.scss'

const OtherComments = ({ formData, setFormData }) => {

    let newFormData = Object.assign({}, formData);




    const storeValue = (event) => {
        newFormData.values.otherComments = { val: event.target.value, isRequired: false }
        setFormData(newFormData)
    }


    return (
        <div className={styles.OtherComments}>
            <textarea
                onChange={storeValue}
                id='otherComments'
                name='forVal' ></textarea>
            <p>
                {/* {newFormData.errors[forVal] ? formData.errors[forVal].message : null} */}
            </p>
        </div>
    )

}
export default OtherComments