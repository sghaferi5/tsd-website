import * as React from 'react'

import Layout from '../components/layout'
import ReferringDoctorsMain from '../components/referring-doctors/referring-doctors-main.js'

const ReferringDoctors = () => {
    return (
        <Layout pageTitle='Make An Appointment'>
            <ReferringDoctorsMain />
        </Layout>
    )
}

export default ReferringDoctors