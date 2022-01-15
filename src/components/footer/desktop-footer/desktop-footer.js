import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'

import * as styles from './desktop-footer.module.scss'

const DesktopFooter = () => {
    const inlineStyles = {
        containerEl: {
            height: '100%'
        },
        rowEl: {
            height: '100%',
            alignItems: 'center'
        }
    }
    return (
        <div className={styles.footerMain}>
        </div>
    )
}

export default DesktopFooter
