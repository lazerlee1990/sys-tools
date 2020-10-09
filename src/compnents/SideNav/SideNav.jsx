import React from 'react';
import {Button} from '@material-ui/core'
import './SideNav.css';

export default function SideNav() {

  return (
    <nav >
        <img src='/logo192.png' alt='logo' />
        <div className="button-menu">
            <button>Home</button>
            <button>Home</button>
            <button>Home</button>
            <button>Home</button>
            <button>Home</button>
        </div>
    </nav>
  );
}