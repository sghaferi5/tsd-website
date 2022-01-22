import * as React from 'react'

// import components
import PageBanner from '../page-banner/page-banner'
import ReferringDoctorsForm from './referring-doctors-form'


const ReferringDoctorsMain = () => {
    return (
        <div>
            <PageBanner heading='Referring Doctors' bgImage='referring doctors' />
            <ReferringDoctorsForm />
        </div>
    )
}

export default ReferringDoctorsMain