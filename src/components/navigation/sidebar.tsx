import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import { Drawer } from 'antd';

import './sidebar.scss'

export const Sidebar: React.FC = () => {
  const [ visible, setVisible ] = useState(false)

  let location = useLocation<string>();

  const showDrawer = () => {
    setVisible(true)
  }

  const closeDrawer = () => {
    setVisible(false)
  }

  if ( location.pathname === '/login' ) {
    return null
  }

  return (
    <div>
      <div 
        className="head--dreawer"
        onClick={showDrawer}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <Drawer
        title="Basic Drawer"
        placement={'left'}
        closable={false}
        onClose={closeDrawer}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
