import * as React from 'react'
import OurTeamMain from '../components/our-team/our-team-main'
import Layout from '../components/layout'
import Seo from "../components/Seo"


const OurTeam = () => {
    return (
        <Layout>
            <Seo title='Our Team' />
            <OurTeamMain />
        </Layout>
    )
}

export default OurTeam