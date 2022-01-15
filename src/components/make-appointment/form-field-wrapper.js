import * as React from 'react'
import { Col } from "react-bootstrap"

const FormFieldWrapper = (props) => {
    return (
        <Col lg={12}>
            <div style={{ padding: '1rem 0' }}>
                {props.children}
            </div>
        </Col>

    )
}
export default FormFieldWrapper