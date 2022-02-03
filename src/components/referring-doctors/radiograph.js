import * as React from 'react'
import { useRef } from 'react';

import * as styles from './radiographs.module.scss'

const Radiographs = ({ formData, setFormData }) => {

    const fileNames = useRef()
    let newFormData = Object.assign({}, formData);

    const getFiles = () => {
        if (newFormData.values.radiograph.val == 'Attached') {
            let totalFileSizes = 0

            if (fileNames.current.files) {
                for (let i = 0; i < fileNames.current.files.length; i++) {
                    totalFileSizes += fileNames.current.files[i].size
                }
                if (totalFileSizes > 25165824) {
                    alert('Total size of attachment(s) cannot exceed 24MB')
                    fileNames.current.files = null
                    fileNames.current.value = ''
                    if (newFormData.file) {
                        delete newFormData.file
                    }
                    return
                } else {
                    newFormData['file'] = fileNames.current.files
                    setFormData(newFormData)
                }
            }


        }
    }

    const updateValues = (event) => {
        if (event.target.value == 'Attached') {
            fileNames.current.style.display = 'block'
        } else {
            fileNames.current.style.display = 'none'
            if (newFormData.file) {
                fileNames.current.value = ''
                delete newFormData.file
            }
        }
        newFormData.values.radiograph = { val: event.target.value }
        setFormData(newFormData)
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
                            name='attachments'
                            onChange={getFiles}
                            type="file"
                            id="radio_files" multiple
                            accept='.pdf, .jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*' />
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