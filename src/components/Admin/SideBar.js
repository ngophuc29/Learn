import 'react-pro-sidebar/dist/css/styles.css';
import React from 'react';

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';
import { FaTachometerAlt, FaGem, FaList, FaGithub, FaRegLaughWink, FaHeart } from 'react-icons/fa';
import { FaReact } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

import { MdConnectWithoutContact } from "react-icons/md";
import sidebarBg from '../../assests/bg2.jpg';
const SideBar = (props) => {
    const { image, collapsed, toggled, handleToggleSidebar }=props
    return (
        < >
            <ProSidebar
                // image={image ? sidebarBg : false}
                image={ sidebarBg  }

                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}
            >
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        <FaReact size="2em" color="00bfff"/>
                        Hoi Phuc di
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem
                            icon={<MdDashboard />}
                            //  suffix={<span className="badge red">New</span>}
                        >
                            DashBoard
                        </MenuItem>
                        <MenuItem icon={<FaGem />}>  Component</MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu
                            // suffix={<span className="badge yellow">3</span>}
                            title={"Features"}
                            icon={<FaRegLaughWink />}
                        >
                            <MenuItem> Quản lý User</MenuItem>
                            <MenuItem> Quản lý Quiz </MenuItem>
                            <MenuItem> Quản lý câu hỏi</MenuItem>
                        </SubMenu>

                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}
                    >
                        <a
                            href="https://www.facebook.com/ngphukk2903/"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer"
                        >
                           <MdConnectWithoutContact size="1.5em" />
                            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                                Contact me
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
}

export default SideBar;