import * as React from 'react'
import Layout from '../../components/layout'
import PreOpInstructionsAdultMain from '../../components/patient-instructions-child/pre-op-Instructions-adult-main.js'


const PreOpInstructionsAdult = () => {
    return (
        <Layout pageTitle='Pre-Operative Instructions – Adult Patients'>
            <PreOpInstructionsAdultMain />
        </Layout>
    )
}

export default PreOpInstructionsAdult