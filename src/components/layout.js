import * as React from 'react'
import MainMenu from './main-menu/main-menu'
import MainFooter from '../components/footer/main-footer'

import "normalize.css"
import '../styles/style.scss'
import '../styles/bootstrap-grid.min.css'


const Layout = ({ pageTitle, children }) => {
    return (

        <div>
            <title>{pageTitle}</title>
            <div class='pageContainer'>
                <MainMenu />
                <main>
                    {children}
                </main>
                <MainFooter />
            </div>
        </div>
    )
}

export default Layout