import styled from 'styled-components';
import Colors from '../../constants/colors';

export const HeaderWrapper = styled.div`
    #header {
        position: absolute;
        width: 180px;
    }

    #header .pro-sidebar {
        height: 100vh;
    }

    #header .close-menu {
        color: #c5c9d0;
        position: absolute;
        right: 14px;
        font-size: 22px;
        top: 14px;
        cursor: pointer;
    }

    .logo-text {
        margin-left: 16px;
    }

    #header .close-menu:hover {
        color: white;
    }

    #header .pro-sidebar {
        width: 100%;
        min-width: 100%;
    }
    
    #header .pro-sidebar.collapsed {
        width: 80px;
        min-width: 80px;
    }

    #header .pro-sidebar-inner {
        background-color: white;
        box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);
    }
    
    #header .pro-sidebar-inner .pro-sidebar-layout {
        overflow-y: hidden;
        background: #161c2e;
        font-family: 'Roboto';
    }

    #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item {
        color: #c5c9d0;
        margin: 10px 0px;
        margin: 12px;
        padding: 10px;
    }

    #header .pro-sidebar-inner .pro-sidebar-layout ul .pro-inner-item:hover {
        background: #394052;
        border-radius: 10px;
        color: white;
    }

    #header
        .pro-sidebar-inner
        .pro-sidebar-layout
        ul
        .pro-inner-item
        .pro-icon-wrapper {
        background-color: transparent;
        color: #c5c9d0;
    }

    #header
        .pro-sidebar-inner
        .pro-sidebar-layout
        ul
        .pro-inner-item
        .pro-icon-wrapper
        .pro-item-content {
        color: #000;
    }
    
    #header .logo {
        padding: 20px;
    }

    @media only screen and (max-width: 720px) {
        html {
        overflow: hidden;
        }
    }
`;