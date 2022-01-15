import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'gatsby'

import logoSvg from '../../../images/tsd_logo_navy.svg'
import logoSquare from '../../../images/tsd-sqr-logo.jpg'


import * as styles from './desktop-menu.module.scss'




const DesktopMenu = () => {
    const aboutDropDown = useRef()
    const aboutButton = useRef()

    const hoverDropDown = [aboutButton, aboutDropDown]


    const [expanded, setExpanded] = useState(false)

    const showDropDownMenu = () => {
        setExpanded(true)
    }
    const hideDropDownMenu = () => {
        setExpanded(false)
    }

    useEffect(() => {
        // aboutButton.current.addEventListener('mouseover', showDropDownMenu)
        hoverDropDown.forEach((element) => {
            element.current.addEventListener('mouseover', showDropDownMenu)
            element.current.addEventListener('mouseout', hideDropDownMenu)
            return () => {
                element.current.removeEventListener('mouseover', showDropDownMenu)
                element.current.removeEventListener('mouseout', hideDropDownMenu)
            }
        })
    })



    return (
        <header>
            <div className={styles.header_wrap}>
                <div className={`${styles.menuLogoXl} ${styles.deskTopMenuLogo}`}>
                    <Link to='/'>

                        <img
                            src={logoSvg}
                            alt='Toronto Sleep Dentistry Logo'
                        />
                    </Link>
                </div>
                <div className={`${styles.menuLogoSq} ${styles.deskTopMenuLogo}`}>
                    <Link to='/'>
                        <img
                            src={logoSquare}
                            alt='Toronto Sleep Dentistry Logo'
                        />
                    </Link>
                </div>

                <div className={styles.main_nav}>
                    <ul>
                        <li>
                            <Link to='/'><button>Home</button></Link>
                        </li>
                        <li>
                            <div className={styles.aboutWrap}>
                                <button ref={aboutButton}>
                                    About
                                    <svg stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                </button>
                                <div
                                    ref={aboutDropDown}
                                    style={expanded ? { display: 'block' } : null}
                                    className={styles.aboutDropDown}>
                                    <ul>
                                        <Link to='/about-sleep-dentistry'><li>About Sleep Dentistry</li></Link>
                                        <Link to='/our-team'><li>Our Team</li></Link>
                                    </ul>
                                </div>
                            </div>

                        </li>
                        <li>
                            <Link to='/patient-information'><button>Patient Information</button></Link>
                        </li>
                        <li>
                            <Link to='/patient-instructions'><button>Patient Instructions</button></Link>
                        </li>
                        <li>
                            <Link to='/referring-doctors'><button>Referring Doctors</button></Link>
                        </li>
                        <li>
                            <Link to='/contact-us'><button>Contact Us</button></Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.main_nav_btn}>
                    <Link to='/make-an-appointment'><button>Make an Appointment</button></Link>
                </div>
            </div>
        </header>
    )
}

export default DesktopMenu
