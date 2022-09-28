import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import * as s from './Sidebar.styles.js';

const Sidebar = () => {
    const activeMenu = true;

    return (
      <s.Sidebar>
        <div className="sidebar">
            {activeMenu && (
                <>
                    <div className='sidebar-links'>
                        <Link className='link' to='/' onClick={() => {}}>
                            <SiShopware /> <span>Shoppy</span>
                        </Link>
                        <TooltipComponent content='Menu' position='BottomCenter'>
                            <button className='close-sidebar' type='button' onClick={() => {}}>
                                <MdOutlineCancel style={{ display: 'block' }}/>
                            </button>
                        </TooltipComponent>
                    </div>
                </>
            )}
        </div>
      </s.Sidebar>
    );
}

export default Sidebar;