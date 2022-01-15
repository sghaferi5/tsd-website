import * as React from 'react'
import Layout from '../components/layout'
import PatientInstructionsMain from '../components/patient-instructions/patient-instructions-main'


const PatientInstructions = () => {
    return (
        <Layout pageTitle='Patient Instructions'>
            <PatientInstructionsMain />
        </Layout>
    )
}

export default PatientInstructions