import * as React from 'react'
// import { Container, Row } from 'react-bootstrap'
import DesktopMenu from './desktop-menu/desktop-menu'
import MobileMenu from './mobile-menu/mobile-menu'



const MainMenu = () => {

    return (
        <div>
            <DesktopMenu />
            <MobileMenu />
        </div>
    )
}

export default MainMenu
