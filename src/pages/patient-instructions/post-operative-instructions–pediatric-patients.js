import * as React from 'react'
import Layout from '../../components/layout'
import PostOpInstructionsChildMain from '../../components/patient-instructions-child/post-op-Instructions-child-main.js'


const PreOpInstructionsChild = () => {
    return (
        <Layout pageTitle='Post-Operative Instructions – Pediatric Patients'>
            <PostOpInstructionsChildMain />
        </Layout>
    )
}

export default PreOpInstructionsChild