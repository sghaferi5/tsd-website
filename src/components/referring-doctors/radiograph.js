import { eachProp } from '@react-spring/shared';
import * as React from 'react'
import { useRef } from 'react';

import * as styles from './radiographs.module.scss'

const Radiographs = ({ formData, setFormData }) => {

    const fileNames = useRef()
    let newFormData = Object.assign({}, formData);


    const showFiles = () => {
        console.log(fileNames.current.files)
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
                id='attached' />
                Attached
            </label>
        </li>
        <li>       
            <input ref={fileNames} onChange={showFiles} type="file" name="" id="" multiple />
        </li>   
        <li>
            <label
            htmlFor='mailed'>
                <input 
                type="radio" 
                name="radiographs" 
                id='mailed' />
                Being mailed
            </label>
        </li>
        <li>
            <label
            htmlFor='given'>
                <input 
                type="radio" 
                name="radiographs" 
                id='given' />
                Given to patient
            </label>
        </li>   
        <li>
            <label
            htmlFor='take'>
                <input 
                type="radio" 
                name="radiographs" 
                id='take' />
                Please Take
            </label>
        </li>   
        </ul>
        </div>
    )
}

export default Radiographs