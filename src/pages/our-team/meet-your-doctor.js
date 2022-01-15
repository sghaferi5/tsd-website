import * as React from 'react'

import Layout from '../../components/layout'
import DoctorMeet from '../../components/meet-your-doctor/meet-your-doctor-main'

const meetYourDoctor = () => {
    return (
        <Layout pageTitle='Meet You Doctor'>
            <DoctorMeet />
        </Layout>
    )
}

export default meetYourDoctor