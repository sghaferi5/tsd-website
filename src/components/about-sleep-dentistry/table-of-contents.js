import * as React from 'react'
import { Link } from 'gatsby'

import * as styles from './table-of-contents.module.scss'

const TableOfContents = (props) => {
    return (
        <div className={styles.tableOfContents}>
            <ul>
                <li><a href='#What-is-sleep-dentistry'>What is sleep dentistry?</a></li>
                <li><a href='#levels-of-sedation'>The different levels of sedation</a></li>
                <li><a href='#patients-who-may-need-sleep-dentistry'>Dental procedures</a></li>
                <li><a href='#safety'>Safety of sleep dentistry</a></li>
            </ul>
        </div>
    )
}

export default TableOfContents