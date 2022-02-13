import * as React from 'react'
import Layout from '../components/layout'
import PatienInfoMain from '../components/patient-information-page/patient-information-main'
import Seo from "../components/Seo"


const PatientInfo = () => {
    return (
        <Layout>
            <Seo title='Patient Information'
                description='Patient Safety.' />
            <PatienInfoMain />
        </Layout>
    )
}

export default PatientInfo