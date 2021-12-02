import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import meImg from './imgs/me.jpg';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {
  const dispatch = useDispatch();
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
      <div className='header-left'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/174/174857.png'
          alt=''
        />
        <div className='header-search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>
      <div className='header-right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Notifications' />
        <HeaderOption
          avatar='https://media-exp1.licdn.com/dms/image/D5635AQGO4Z9G8JFH_A/profile-framedphoto-shrink_400_400/0/1632475633031?e=1638360000&v=beta&t=Y2EHk-yLzNgZ-0d9U3et3aqhNqGzjgoxdwx4lS2BBWY'
          //   avatar={meImg}
          title='Me'
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
