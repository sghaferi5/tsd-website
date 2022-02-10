import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import * as styles from './team-member-photo.module.scss'

const TeamMemberPhoto = (props) => {

    switch (props.thumbPhoto) {
        case 'our-team-doctor-thumb':
            return (
                <StaticImage
                    src='../../images/our-team-doctor-thumb.jpg'
                />
            )
        default:
            return (
                <StaticImage
                    src='../../images/our-team-use-fill.svg'
                />
            )
    }
}

export default TeamMemberPhoto