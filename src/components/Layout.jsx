import React from 'react'
import NavBar from  './NavBar'
import '../styles/Layout.css'

const Layout = ({children}) => {
    return (
        <>
        <NavBar/>
        <div>
            <h1 className='title'>Power Chords</h1>
        </div>
        <div className=''>
            {children}
        </div>
        
        </>
    )
}

export default Layout