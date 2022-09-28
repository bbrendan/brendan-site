import styled from 'styled-components';

export const Sidebar = styled.div`
    .sidebar {
        margin-left: 12px;
        height: 100px;
        overflow: auto;
        padding-bottom: 40px;
    }

    .sidebar-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .link {
        align-items: center;
        gap: 12px;
        margin-left: 12px;
        margin-top: 16px;
        display: flex;
        font-size: 20px;
        line-height: 28px;
        font-weight: 800;
        color: rgb(15 23 42);
        letter-spacing: -0.025em;
    }

    .close-sidebar {
        font-size: 20px;
        padding: 0px;
        margin: 0px;
        margin-top: 16px;
        border-radius: 100%;
        line-height: 28px;
        padding: 12px;
        border-color: transparent;
        background: transparent;
    }

    .close-sidebar:hover {
        color: #4a4a4a;
    }
`;