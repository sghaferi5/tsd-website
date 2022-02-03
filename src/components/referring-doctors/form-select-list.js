import * as React from 'react'
import { useEffect } from 'react'

import * as styles from './form-select-list.module.scss'

const FormSelectList = ({ list, listGroup, formData, setFormData }) => {


    let newFormData = Object.assign({}, formData);

    useEffect(() => {

    })


    const updateSelected = (event) => {


        if (event.target.checked) {
            newFormData.values[listGroup].val.push(event.target.value)
            setFormData(newFormData)
        } else if (!event.target.checked) {
            newFormData.values[listGroup].val = newFormData.values[listGroup].val.filter(item => item !== event.target.value)
            setFormData(newFormData)
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
            </ul>
        </div>
    )
}

export default FormSelectList