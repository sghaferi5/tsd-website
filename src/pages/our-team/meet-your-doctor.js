import * as React from 'react'

import Layout from '../../components/layout'
import DoctorMeet from '../../components/meet-your-doctor/meet-your-doctor-main'
import Seo from "../../components/Seo"


const meetYourDoctor = () => {
    return (
        <Layout>
            <Seo title='Meet You Doctor' />
            <DoctorMeet />
        </Layout>
    )
}

export default meetYourDoctor