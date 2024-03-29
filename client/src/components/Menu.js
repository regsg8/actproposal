import React from 'react'
import Nav from './dashboard/Nav'
import { Consumer } from '../index'

const Menu = (props) => {
   
    return (
        <Consumer>
            {/* {value => (
                <div className={`menu-${value.menu}`}>
                    <i className={`fas fa-bars fa-2x menu-button${value.menu}`} onClick={value.toggleMenu}></i>
                </div>
            )} */}
            {value => (
                <div className={`menu-none`}>
                    <i className={`fas fa-bars fa-2x menu-buttonnone`} onClick={value.toggleMenu}></i>
                </div>
            )}
        </Consumer>
    )
}

export default Menu
