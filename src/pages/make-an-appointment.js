import * as React from 'react'

import Layout from '../components/layout'
import MakeAppointmentMain from '../components/make-appointment/make-appointment-main.js'
import Seo from "../components/Seo"

const MakeAppointment = () => {
    return (
        <Layout>
            <Seo title='Make An Appointment' />
            <MakeAppointmentMain />
        </Layout>
    )
}

export default MakeAppointment