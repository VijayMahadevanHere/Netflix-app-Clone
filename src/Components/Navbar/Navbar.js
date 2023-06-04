import React from 'react';
import '../Navbar/Navbar.css';
import '../../App.css';

function Navbar() {
  return (
    <div className='navbar'>
      <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png' alt='netflix-logo' />
      <div className='navbar-items'>
        <div className='navbar-item'>Home</div>
        <div className='navbar-item'>Tvshows</div>
        <div className='navbar-item'>Movies</div>
        <div className='navbar-item'>RecentlyAdded</div>
        <div className='navbar-item'>MyList</div>
      </div>
      <div className='navbar-items'>
        <div className='navbar-item'>Kids</div>
        <div className='navbar-item'>Dvd</div>
      </div>
      <img className='avatar' src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png' alt='avatar' />
    </div>
  );
}

export default Navbar;
