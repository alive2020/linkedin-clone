import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';

function Header() {
  return (
    <div className='header'>
      <h1>This is header</h1>
      <div className='header-left'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
          alt=''
        />
        <div className='header-search'>
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header-right'></div>
    </div>
  );
}

export default Header;
