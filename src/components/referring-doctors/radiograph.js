import * as React from 'react'
import { useRef } from 'react';

import * as styles from './radiographs.module.scss'

const Radiographs = ({ formData, setFormData }) => {

    const fileNames = useRef()
    let newFormData = Object.assign({}, formData);


    const showFiles = () => {
        console.log(fileNames.current.files)

    }

    const updateValues = (event) => {
        newFormData.values.radiograph = {val: event.target.value}
        setFormData(newFormData)
        if (event.target.value == 'Attached') {
            fileNames.current.style.display = 'block'
        } else {
            fileNames.current.style.display = 'none'
        }
    }
    

   
    return (
        <div className={styles.radiographsWrap}>
        <ul>              
        <li>
            <label
            htmlFor='attached'>
                <input 
                type="radio" 
                name="radiographs" 
                id='attached'
                value='Attached'
                onChange={updateValues} />
                Attached
            </label>
            <div>
            <input 
                ref={fileNames} 
                onChange={showFiles} 
                type="file" name="radio_files" 
                id="radio_files" multiple />
            </div>
        </li>   
        <li>
            <label
            htmlFor='mailed'>
                <input 
                type="radio" 
                name="radiographs" 
                id='mailed'
                value='Being mailed'
                onChange={updateValues} />
                Being mailed
            </label>
        </li>
        <li>
            <label
            htmlFor='given'>
                <input 
                type="radio" 
                name="radiographs" 
                id='given'
                value='Given to patient'
                onChange={updateValues} />
                Given to patient
            </label>
        </li>   
        <li>
            <label
            htmlFor='take'>
                <input 
                type="radio" 
                name="radiographs" 
                id='take'
                value='Please take'
                onChange={updateValues} />
                Please Take
            </label>
        </li>   
        </ul>
        </div>
    )
}

export default Radiographs