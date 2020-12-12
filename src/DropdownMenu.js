import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {ReactComponent as ArrowIcon} from  './icons/arrow.svg';
import {ReactComponent as BoltIcon} from  './icons/bolt.svg';
import {ReactComponent as CogIcon} from  './icons/cog.svg';

const DropdownMenu = () => {
    
    const [activeMenu, setActiveMenu] = useState('main'); //setting, animals
    const [menuHeight, setMenuHeight] = useState(null);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    const DropdownItem = (props) => {
        return (
            <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span className="icon-right">{props.rightIcon}</span>
            </a>
        )
    }

    return (
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition
                in={activeMenu === 'main'}
                unmountOnExit
                timeout={500}
                classNames="menu-primary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem leftIcon={<BoltIcon/>}>My Profile</DropdownItem>
                    <DropdownItem leftIcon={<CogIcon/>} goToMenu="setting">Settings</DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === 'setting'}
                unmountOnExit
                timeout={500}
                classNames="menu-secondary"
                onEnter={calcHeight}
            >
                <div className="menu">
                    <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"/>
                    <DropdownItem leftIcon={"🎃"}>Pumpkin 1</DropdownItem>
                    <DropdownItem leftIcon={"🎃"}>Pumpkin 2</DropdownItem>
                    <DropdownItem leftIcon={"🎃"}>Pumpkin 3</DropdownItem>
                    <DropdownItem leftIcon={"🎃"}>Pumpkin 4</DropdownItem>
                    <DropdownItem leftIcon={"🎃"}>Pumpkin 5</DropdownItem>
                </div>
            </CSSTransition>
        </div>

    )
}

export default DropdownMenu;