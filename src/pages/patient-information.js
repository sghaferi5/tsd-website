import * as React from 'react'

import Layout from '../components/layout'
import PatienInfoMain from '../components/patient-information-page/patient-information-main'

const PatientInfo = () => {
    return (
        <Layout pageTitle='Patient Information'>
            <PatienInfoMain />
        </Layout>
    )
}

export default PatientInfo