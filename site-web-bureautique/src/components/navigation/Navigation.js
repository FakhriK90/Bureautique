import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';
import SearchIcon from '@mui/icons-material/Search';
import Category from './Category';

function Navigation() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);




  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <div className='title-logo'>
            <span>Entreprise Jadla Boujemaaa</span>
            <span>للتجهيز الاداري و المكتبي</span>
            </div>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <div className="wrap">
        <div className="search">
          <input type="text" className="searchTerm" placeholder="Rechercher" />
          <button type="submit" className="searchButton">
            <SearchIcon/>
          </button>
        </div>
      </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/signin' className='nav-links' onClick={closeMobileMenu}>
                S'inscrire
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Favories
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <Category/>
              </Link>
            </li>

            
          </ul>
          
        </div>
      </nav>
    </>
  );
}

export default Navigation;