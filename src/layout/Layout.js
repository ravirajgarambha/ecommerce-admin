import React from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import Sidebar from './sidebar/Sidebar'

const Layout = ({ children }) => {
    return (

        <>            
        <Header />
            <div><Sidebar /></div>
        <Footer />
        </>

    )
}

export default Layout
