import styled from 'styled-components';
import Colors from './constants/colors';

export const MainContainer = styled.div`
    .main-container {
        display: flex;
        position: relative;
    }

    .tooltip {
        position: fixed;
        right: 16px;
        bottom: 16px;
    }

    .settings-button {
        font-size: 30px;
        line-height: 50%;
        padding: 12px;
        color: white;
        border-color: ${Colors.primary};
    }

    .settings-button:hover{
        background-color: ${Colors.primaryLight} !important;
        border-color: ${Colors.primaryLight};
    }

    .sidebar-enabled {
        width: 288px !important;
        position: fixed;
    }

    .sidebar-disabled {
        width: 0px !important;
    }

    .navbar {
        position: fixed;
        background-color: white;
        width: 100%;
    }

    .navbar-enabled {
        min-height: 100px;
        width: 100%;
        margin-left: 288px;
    }

    .navbar-disabled {
        min-height: 100px;
        width: 100%;
        margin-left: 0px;
    }
`;