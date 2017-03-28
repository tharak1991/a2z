import React from 'react'
import style from './style.css'
import NavItems from './navItems'

class Nav extends React.Component {
    render() {
   
        return(
            <div className="side-nav">
             <NavItems />
            </div>
        )
    }
}

export default Nav