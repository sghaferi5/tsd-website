import * as React from 'react'
import AboutSleepDentistryMain from '../components/about-sleep-dentistry/about-sleep-dentistry-main'
import Layout from '../components/layout'
import Seo from "../components/Seo"

const AboutSleepDentistry = () => {
    return (
        <Layout>
            <Seo title='About Sleep Dentistry' />
            <AboutSleepDentistryMain />
        </Layout>
    )
}

export default AboutSleepDentistry