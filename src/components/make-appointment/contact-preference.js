import * as React from 'react'
import * as styles from './contact-preference.module.scss'
const ContactPreference = ({ formData, setFormData }) => {

    let newFormData = Object.assign({}, formData);

    const storeValue = (event) => {
        console.log(event.target.value)
        newFormData.values.contactMethod = { val: event.target.value, isRequired: true }
        delete newFormData.errors.contactMethod

        setFormData(newFormData)
    }

    return (
        <div className={styles.contactPreference}>
            <p>Please advise how you would like to be contacted <span>*</span></p>
            <div>
                <div>
                    <label
                        htmlFor='preferenceEmail'>
                        <input
                            onChange={storeValue}
                            type="radio"
                            name="contactMethod"
                            id="preferenceEmail"
                            value='Email' />
                        Email
                    </label>
                </div>
                <div>
                    <label
                        htmlFor='preferencePhone'>
                        <input
                            onChange={storeValue}
                            type="radio"
                            name="contactMethod"
                            id="preferencePhone"
                            value='Phone' />
                        Phone
                    </label>
                </div>
            </div>
            <p className={styles.errorMSg}>
                {newFormData.errors['contactMethod'] ? formData.errors['contactMethod'].message : null}
            </p>
        </div>
    )

}
export default ContactPreference
