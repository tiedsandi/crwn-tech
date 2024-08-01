'use client';
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';

import classes from './nav.module.scss';
import LogoIcon from '../../../public/crown.svg';

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <React.Fragment>
      <nav className={classes.nav}>
        <Image
          src={LogoIcon}
          alt='Logo'
          widht={30}
          height={30}
          style={{filter: 'invert(.9)'}}
          priority
        />

        <div
          className={`${classes.hamMenu} ${menuOpen ? classes.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`${classes.offScreenMenu} ${menuOpen ? classes.active : ''}`}>
          <ul>
            <li>Catalogue</li>
            <li>Contacts</li>
          </ul>
          <ul>
            <li>
              <Link href={'/profile'}>
                <Image src={'icons/user.svg'} alt='user' width={24} height={24} />
              </Link>
            </li>
            <li>
              <Image src={'/icons/cart.svg'} alt='Cart' width={24} height={24} />
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
