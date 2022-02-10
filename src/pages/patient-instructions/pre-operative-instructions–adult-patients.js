import * as React from 'react'
import Layout from '../../components/layout'
import PreOpInstructionsAdultMain from '../../components/patient-instructions-child/pre-op-Instructions-adult-main.js'
import Seo from "../../components/Seo"



const PreOpInstructionsAdult = () => {
    return (
        <Layout>
            <Seo title='Pre-Operative Instructions – Adult Patients' />
            <PreOpInstructionsAdultMain />
        </Layout>
    )
}

export default PreOpInstructionsAdult