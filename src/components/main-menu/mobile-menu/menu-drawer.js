import * as React from 'react'
import { useRef } from 'react'
import { useSpring, animated } from 'react-spring'
import { Link } from 'gatsby'

import * as styles from './menu-drawer.module.scss'

import Close from '../../../images/close-fill-dark.svg'


const MenuDrawer = ({ menu, setMenu }) => {

    let menuCopy = Object.assign({}, menu);
    const modalScreen = useRef()
    const closeBtnRef = useRef()
    const aboutDropDownRef = useRef()
    const aboutDropDownRefIcon = useRef()

    const animation = useSpring({
        config: {
            duration: 200
        },
        opacity: menu.showMenu ? 1 : 0,
        transform: menu.showMenu ? `translateX(0)` : `translateX(320px)`
    })

    const dropDownAnimation = useSpring({
        config: {
            duration: 500
        },
        maxHeight: menu.showSubMenu ? `120px` : `0`,
        overflow: menu.showSubMenu ? 'hidden' : 'hidden'
    })

    const closeFullMenu = (event) => {
        if (modalScreen.current === event.target || closeBtnRef.current == event.target) {
            menuCopy.showMenu = false
            menuCopy.showSubMenu = false
            setMenu(menuCopy)
            document.documentElement.style.overflow = null
        }
    }

    const showDropDownMenu = (event) => {
        if (aboutDropDownRef.current === event.target) {
            if (menuCopy.showSubMenu) {
                menuCopy.showSubMenu = false
            } else {
                menuCopy.showSubMenu = true
            }
            setMenu(menuCopy)
        }
    }

    return (
        menu.showMenu ? (
            <div className={styles.menuDrawerDark}
                ref={modalScreen}
                onClick={closeFullMenu} >
                <div className={styles.menuDrawerDarkWrapper}>
                    <animated.div style={animation}>
                        <div className={styles.menuDrawerMain}>
                            <div className={styles.contentWrapper}>
                                <button
                                    className={styles.closeBtn} >
                                    <img src={Close} ref={closeBtnRef} />
                                </button>
                                <ul>
                                    <li>
                                        <Link to='/'>
                                            <button>
                                                Home
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <div
                                            className={styles.aboutWrap}>
                                            <button
                                                ref={aboutDropDownRef}
                                                onClick={showDropDownMenu} >
                                                About
                                            </button>
                                            <svg stroke-width="0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>
                                        </div>
                                        <animated.div style={dropDownAnimation}>
                                            <div className={styles.aboutDropDown}>
                                                <ul>
                                                    <li>
                                                        <Link to='/about-sleep-dentistry'>
                                                            <button>
                                                                About Sleep Dentistry
                                                            </button>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to='/our-team'>
                                                            <button>
                                                                Our Team
                                                            </button>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </animated.div>
                                    </li>
                                    <li>
                                        <Link to='/patient-information'>
                                            <button>
                                                Patient Information
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/patient-instructions'>
                                            <button>
                                                Patient Instructions
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/referring-doctors'>
                                            <button>
                                                Referring Doctors
                                            </button>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact-us'>
                                            <button>
                                                Contact Us
                                            </button>
                                        </Link>
                                    </li>
                                </ul>
                                <Link to='/make-an-appointment'>
                                    <button className='blueButton '>Make an Appointment</button>
                                </Link>
                            </div>
                        </div>
                    </animated.div>
                </div>
            </div>
        ) : null
    )
}

export default MenuDrawer