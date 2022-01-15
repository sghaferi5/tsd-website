import * as React from 'react'
// import PageBanner from '../page-banner/page-banner'
import MainContent from './main-content'
import PageBanner from '../page-banner/page-banner'


const AboutSleepDentistryMain = () => {
    return (
        <div className="about-sleep-den-main">
            <PageBanner
                bgImage='about sleep dentistry'
                heading='About Sleep Dentistry' />
            <MainContent />
        </div>
    )
}

export default AboutSleepDentistryMain