import * as React from 'react'

import Layout from '../components/layout'
import ReferringDoctorsMain from '../components/referring-doctors/referring-doctors-main.js'
import Seo from "../components/Seo"


const ReferringDoctors = () => {
    return (
        <Layout>
            <Seo title='Referring Doctors'
                description='Dental Anaesthesia Referral. Sleep Dentistry Referral.' />
            <ReferringDoctorsMain />
        </Layout>
    )
}

export default ReferringDoctors