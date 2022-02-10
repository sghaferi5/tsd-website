import * as React from 'react'
import Layout from '../../components/layout'
import PostOpInstructionsAdultMain from '../../components/patient-instructions-child/post-op-Instructions-adult-main.js'
import Seo from "../../components/Seo"



const PreOpInstructionsAdult = () => {
    return (
        <Layout>
            <Seo title='Post-Operative Instructions – Pediatric Patients' />
            <PostOpInstructionsAdultMain />
        </Layout>
    )
}

export default PreOpInstructionsAdult