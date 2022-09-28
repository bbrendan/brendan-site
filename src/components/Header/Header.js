import React, { useState } from 'react';

import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import { FaList, FaRegHeart, FaGithub } from 'react-icons/fa';
import {
  FiHome,
  FiLogOut,
  FiArrowLeftCircle,
  FiArrowRightCircle,
} from 'react-icons/fi';
import { RiPencilLine } from 'react-icons/ri';
import { BiCog } from 'react-icons/bi';

import 'react-pro-sidebar/dist/css/styles.css';
import * as s from './Header.styles.js';
import { Sidebar } from '../Sidebar/Sidebar.styles.js';

const Header = () => {
  // set initial menu open state to false
  const [menuClosed, setmenuClosed] = useState(false);

  const menuClick = () => {
    menuClosed ? setmenuClosed(false) : setmenuClosed(true);
  };

  return (
    <>
      <s.HeaderWrapper>
        <div id="header">
          <ProSidebar collapsed={menuClosed}>
            <SidebarHeader>
              <div className="logo-text">
                <p style={{ margin: !menuClosed ? '0px' : '16px 0px'}}>
                  {menuClosed ? (
                    <FaGithub />
                  ) : (
                    <div>
                      <FaGithub />
                      <p style={{ display: 'inline-block', marginLeft: '8px' }}>brendanjdf</p>
                    </div>
                  )}
                </p>
              </div>
              <div className="close-menu" onClick={menuClick}>
                {menuClosed ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
              </div>
            </SidebarHeader>
            <SidebarContent>
              <Menu className="menu-contents" iconShape="square">
                <MenuItem active={true} icon={<FiHome />}>
                  {!menuClosed ? "Home" : ""}
                </MenuItem>
                <MenuItem icon={<FaList />}>
                  {!menuClosed ? "Category" : ""}
                </MenuItem>
                <MenuItem icon={<FaRegHeart />}>
                  {!menuClosed ? "Favourite" : ""}
                </MenuItem>
                <MenuItem icon={<RiPencilLine />}>
                  {!menuClosed ? "Author" : ""}
                </MenuItem>
                <MenuItem icon={<BiCog />}>
                  {!menuClosed ? "Settings" : ""}
                </MenuItem>
              </Menu>
            </SidebarContent>
            <SidebarFooter>
              <Menu iconShape="square">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </Menu>
            </SidebarFooter>
          </ProSidebar>
        </div>
      </s.HeaderWrapper>
    </>
  );
};

export default Header;
