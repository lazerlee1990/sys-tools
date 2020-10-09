import React, { useState} from 'react';
import {
  useLocation,
  Link
} from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home'
import SettingsSystemDaydreamIcon from '@material-ui/icons/SettingsSystemDaydream';
import LanguageIcon from '@material-ui/icons/Language';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import './SideNav.css';



export default function SideNav() {
    
    const location = useLocation()
    const [active, setActive] = useState(location.pathname)
    const [shrink, setShrink] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [arrow, setArrow] = useState("rotate(0deg)")

    const handlePageChange = (page) => {
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

    const handleShrink = () => {
        setShrink(!shrink)
        setHidden(!hidden)
        if (arrow === 'rotate(0deg)') {
            setArrow('rotate(180deg)')
        } else {
            setArrow('rotate(0deg)')
        }
        
    }

  return (
    <>
    <div  className="drop-in" style={{zIndex: "100"}}>
        <div>
            <div onClick={() => handleShrink()} className="arrow-container">
                <ArrowBackIcon style={{transform: arrow}}/>
            </div>
            <div className="link-container" style={{paddingTop: "125px", opacity: `${hidden  ? "1" : "0"}`}}>
                <Link to='/'>
                    <HomeIcon style={{padding: "12px"}}/>
                </Link>
                <Link to='/system'>
                    <SettingsSystemDaydreamIcon style={{padding: "12px"}}/>
                </Link>
            </div>
        </div>
    </div>
    <nav style={{transform: shrink ?  "translateX(-100%)" : "none"}}>
        <hr className="solid" />
        <div style={{display: "flex"}}> 
            <img className="logo"  src='/logo192.png' alt='logo' />
            <p style={{color: "white"}}>Firstnet <br />UI Designs</p>
           
        </div>
        <hr className="solid" />
        
        <div className="button-menu">
            <Link style={{background: `${active === '/' ? "#61dafb" : ""}`, boxShadow: `${active === '/' ? "10px 0px 19px -3px rgba(0,0,0,0.37)" : "none"}`}} to='/' onClick={() => handlePageChange("home")}><HomeIcon style={{padding: "12px"}}/>Home </Link>
            <Link style={{background: `${active === '/system' ? "#61dafb" : ""}`, boxShadow: `${active === '/system' ? "10px 0px 19px -3px rgba(0,0,0,0.37)" : "none"}`}} to='/system' onClick={() => handlePageChange("system")}><SettingsSystemDaydreamIcon style={{padding: "12px"}}/> System Logs</Link>
            <Link style={{background: `${active === '/apache' ? "#61dafb" : ""}`, boxShadow: `${active === '/apache' ? "10px 0px 19px -3px rgba(0,0,0,0.37)" : "none"}`}} to='/apache' onClick={() => handlePageChange("apache")}><LanguageIcon style={{padding: "12px"}}/>Apache 2</Link>
            <Link style={{background: `${active === '/cron' ? "#61dafb" : ""}`, boxShadow: `${active === '/cron' ? "10px 0px 19px -3px rgba(0,0,0,0.37)" : "none"}`}} to='/cron' onClick={() => handlePageChange("cron")}>{<AccessAlarmIcon style={{padding: "12px"}}/>}  Cron Jobs</Link>
        </div>
    </nav>
</>
  );
}