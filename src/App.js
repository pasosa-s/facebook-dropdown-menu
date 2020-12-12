import React from 'react';
import DropdownMenu from './DropdownMenu';
import Navbar from './Navbar';
import NavItem from './NavItem';

import {ReactComponent as BellIcon} from './icons/bell.svg';
import {ReactComponent as CaretIcon} from './icons/caret.svg';
import {ReactComponent as MessengerIcon} from './icons/messenger.svg';
import {ReactComponent as PlusIcon} from './icons/plus.svg';

const App = () => {
  return (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon/>} />
      <NavItem icon={<MessengerIcon/>}/>
      <NavItem icon={<CaretIcon/>} >
        <DropdownMenu />
      </NavItem>
    </Navbar>
  )
}

export default App;
