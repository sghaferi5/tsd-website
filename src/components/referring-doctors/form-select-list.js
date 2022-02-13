import * as React from 'react'
import { useEffect, useRef } from 'react'

import * as styles from './form-select-list.module.scss'

const FormSelectList = ({ list, listGroup, formData, setFormData }) => {

    const otherInput = useRef()
    let newFormData = Object.assign({}, formData)

    useEffect(() => {

    })

    const updateOtherValue = (event) => {
        newFormData.values['otherInput'] = { val: event.target.value }
        setFormData(newFormData)
    }


    const updateSelected = (event) => {

        if (event.target.checked) {
            if (event.target.value != 'Other') {
                newFormData.values[listGroup].val.push(event.target.value)
                setFormData(newFormData)
            } else if (event.target.id == 'Other') {
                otherInput.current.disabled = false
            }
        } else if (!event.target.checked) {
            newFormData.values[listGroup].val = newFormData.values[listGroup].val.filter(item => item !== event.target.value)
            setFormData(newFormData)
            if (event.target.id == 'Other') {
                otherInput.current.disabled = true
                otherInput.current.value = ''
                delete newFormData.values['otherInput']
                setFormData(newFormData)
            }
        }
    }


    return (
        <div className={styles.formSelectList}>
            <ul>
                {list.map((item) => (

                    <li>
                        <label
                            htmlFor={item.for}>
                            <input
                                type="checkbox"
                                name={item.for}
                                id={item.for}
                                value={item.value}
                                onChange={updateSelected} />
                            {item.value}
                        </label>
                    </li>
                ))}
                <li>
                    <input
                        ref={otherInput}
                        id="otherInput"
                        type="text"
                        onChange={updateOtherValue}
                        disabled />
                </li>
            </ul>
        </div>
    )
}

export default FormSelectList