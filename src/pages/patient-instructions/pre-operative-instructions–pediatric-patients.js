import * as React from 'react'
import Layout from '../../components/layout'
import PreOpInstructionsChildMain from '../../components/patient-instructions-child/pre-op-Instructions-child-main.js'
import Seo from "../../components/Seo"



const PreOpInstructionsChild = () => {
    return (
        <Layout>
            <Seo title='Pre-Operative Instructions – Pediatric Patients' />
            <PreOpInstructionsChildMain />
        </Layout>
    )
}

export default PreOpInstructionsChild