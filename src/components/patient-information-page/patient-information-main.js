import * as React from 'react'
import PageBanner from '../page-banner/page-banner'
import MainContent from './main-content'

const PatientInformationMain = () => {
    return (
        <div className="patientInfo-main">
            <PageBanner heading='Patient Information' bgImage='patient information' />
            <MainContent />
        </div>
    )
}

export default PatientInformationMain