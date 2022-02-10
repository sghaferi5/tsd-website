import * as React from 'react'
import Layout from '../components/layout'
import PatientInstructionsMain from '../components/patient-instructions/patient-instructions-main'
import Seo from "../components/Seo"



const PatientInstructions = () => {
    return (
        <Layout>
            <Seo title='Patient Instructions' />
            <PatientInstructionsMain />
        </Layout>
    )
}

export default PatientInstructions