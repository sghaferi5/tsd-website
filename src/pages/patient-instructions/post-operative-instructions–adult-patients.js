import * as React from 'react'
import Layout from '../../components/layout'
import PostOpInstructionsAdultMain from '../../components/patient-instructions-child/post-op-Instructions-adult-main.js'


const PreOpInstructionsAdult = () => {
    return (
        <Layout pageTitle='Post-Operative Instructions – Pediatric Patients'>
            <PostOpInstructionsAdultMain />
        </Layout>
    )
}

export default PreOpInstructionsAdult