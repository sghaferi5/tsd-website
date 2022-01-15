import * as React from 'react'

import Layout from '../components/layout'
import MakeAppointmentMain from '../components/make-appointment/make-appointment-main.js'

const MakeAppointment = () => {
    return (
        <Layout pageTitle='Make An Appointment'>
            <MakeAppointmentMain />
        </Layout>
    )
}

export default MakeAppointment