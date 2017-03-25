import React from 'react'
import style from './style.css'
import NavItems from './navItems'

class Nav extends React.Component {
    render() {
       let user = {
            name:'achus',
            age: 27,
            sports: ['asasas','asasasas']
        }
        return(
            <div className="side-nav">
             <NavItems name={'achu'} user={user}/>
            </div>
        )
    }
}

export default Nav