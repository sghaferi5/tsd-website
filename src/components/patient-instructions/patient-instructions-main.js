import * as React from 'react'
import PageBanner from '../page-banner/page-banner'
import MainContent from './main-content'

const PatientInstructionsMain = () => {
    return (
        <div >
            <PageBanner heading='Patient Instructions' bgImage='patient instructions' />
            <MainContent />
        </div>
    )
}

export default PatientInstructionsMain