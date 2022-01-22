import * as React from 'react'
import Layout from '../../components/layout'
import PreOpInstructionsChildMain from '../../components/patient-instructions-child/pre-op-Instructions-child-main.js'


const PreOpInstructionsChild = () => {
    return (
        <Layout pageTitle='Pre-Operative Instructions – Pediatric Patients'>
            <PreOpInstructionsChildMain />
        </Layout>
    )
}

export default PreOpInstructionsChild