import * as React from 'react'

import Layout from '../components/layout'
import ReferringDoctorsMain from '../components/referring-doctors/referring-doctors-main.js'
import Seo from "../components/Seo"


const ReferringDoctors = () => {
    return (
        <Layout>
            <Seo title='Referring Doctors' />
            <ReferringDoctorsMain />
        </Layout>
    )
}

export default ReferringDoctors