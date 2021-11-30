import { Avatar } from '@mui/material';
import React from 'react';
import './Sidebar.css';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar-recentItem'>
      <span className='sidebar-hash'>#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className='sidebar'>
      <div className='sidebar-top'>
        <img
          src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGJhY2tncm91bmR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
          alt=''
        />
        <Avatar className='sidebar-avatar' src='' />
        <h2>Aisulu K</h2>
        <h4>alive.k001@gmail.com</h4>
      </div>

      <div className='sidebar-stats'>
        <div className='sidebar-stat'>
          <p>Connections</p>
          <p className='sidebar-statNumber'>246</p>
          {/* <p>Grow your network</p> */}
        </div>
        <div className='sidebar-stat'>
          <p>Who viewed you</p>
          <p className='sidebar-statNumber'>2,543</p>
        </div>
        {/* <div className='sidebar-stat'>
          <p>Access exclusive toos & insights</p>
          <p className='sidebar-statNumber'>Reactivate Premium</p>
        </div> */}
      </div>
      <div className='sidebar-bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('softwareengineering')}
        {recentItem('development')}
      </div>
    </div>
  );
}

export default Sidebar;
