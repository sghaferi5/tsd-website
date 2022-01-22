import * as React from 'react'
import { useEffect, useState, useRef } from 'react'
import { Link } from 'gatsby'
import MenuDrawer from './menu-drawer'

import * as styles from './mobile-menu.module.scss'

import logoSvg from '../../../images/tsd_logo_navy.svg'


const MobileMenu = () => {

    const [menu, setMenu] = useState({
        showMenu: false,
        showSubMenu: false
    })

    const showFullMenu = () => {
        setMenu({
            showMenu: true,
            showSubMenu: false
        })
        document.documentElement.style.overflow = 'hidden'
    }



    return (
        <header className={styles.menuMobile}>
            <div className={styles.mobileMenuBarWrap}>
                <Link to='/'>
                    <img
                        src={logoSvg}
                        alt='Toronto Sleep Dentistry Logo'
                    />
                </Link>
                <button onClick={showFullMenu}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24" >
                        <path fill="none" d="M0 0h24v24H0z" />
                        <path d="M3 4h18v2H3V4zm6 7h12v2H9v-2zm-6 7h18v2H3v-2z" />
                    </svg>
                </button>
            </div>
            <MenuDrawer
                menu={menu}
                setMenu={setMenu} />
        </header>
    )
}

export default MobileMenu