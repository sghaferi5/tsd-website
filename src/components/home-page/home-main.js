import * as React from 'react'

import HomeHero from './home-hero'
import HomeAbout from './home-about'

const HomeMain = () => {
    return (
        <div className='home-main'>
            <HomeHero />
            <HomeAbout />
        </div>
    )
}

export default HomeMain