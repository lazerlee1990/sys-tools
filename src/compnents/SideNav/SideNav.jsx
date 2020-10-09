import React, {useEffect, useState} from 'react';
import {
  useLocation,
  Link
} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home'
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import LanguageIcon from '@material-ui/icons/Language';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import './SideNav.css';



export default function SideNav() {
    
    const location = useLocation()
    const [active, setActive] = useState(location.pathname)


    const handleClick = (page) => {
        switch(page) {
            case 'home':
                setActive('/')
                break;
            case 'system':
                setActive('/system')
                break;
            case 'cron':
                setActive('/cron')
                break;
            case 'apache':
                setActive('/apache')
                break;
            default:
                setActive('/home')
                break;
        }
    }

  return (
    <nav >
        <img className="logo" style={{padding: "20px"}} src='/logo192.png' alt='logo' />
        <div className="button-menu">
            <Link style={{background: `${active === '/' ? "#61dafb" : ""}`}} to='/' onClick={() => handleClick("home")}><HomeIcon style={{padding: "7px"}}/>Home </Link>
            <Link style={{background: `${active === '/system' ? "#61dafb" : ""}`}} to='/system' onClick={() => handleClick("system")}><SettingsSystemDaydreamIcon style={{padding: "7px"}}/> System Logs</Link>
            <Link style={{background: `${active === '/apache' ? "#61dafb" : ""}`}} to='/apache' onClick={() => handleClick("apache")}><LanguageIcon style={{padding: "7px"}}/>Apache 2 Data</Link>
            <Link style={{background: `${active === '/cron' ? "#61dafb" : ""}`}} to='/cron' onClick={() => handleClick("cron")}>{<AccessAlarmIcon style={{padding: "7px"}}/>}  Cron Jobs</Link>
        </div>
    </nav>
  );
}