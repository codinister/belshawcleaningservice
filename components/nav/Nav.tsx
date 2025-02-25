'use client'
import Link from 'next/link';
import Hamburgeropen from './Hamburgeropen';
import Hamburgerclose from './Hamburgerclose';
import React, { useRef } from 'react';
import Image from 'next/image';

import { useInView } from 'react-intersection-observer';

const Nav = () => {
  const { ref: navElem, inView: navElemVal } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const nav = useRef<HTMLElement>(null);
  const navwrapper = navElemVal ? 'nav-wrapper' : 'navanim';

  const opennav = () => {


  };

  const closenav = () => {

  };


  return (
    <div className="navbar" ref={navElem}>
      <Hamburgeropen opennav={opennav} name="Belshaw Cleaning Services" />

      <nav data-nav="false" ref={nav} className="nav">
        <div className={navwrapper}>
          <Hamburgerclose closenav={closenav} />

          <ul>
            <li className="logo-img-bx">
              <Link href="/">
                  <Image
                    width="200"
                    height="70"
                    src="/logo.png"
                    alt=""
                  />
              </Link>
            </li>
            <li className="active">
              <Link href="/">
                Home
              </Link>
            </li>
            <li>
              <Link href="!#">
                About Us
              </Link>
              <ul>
                <li>
                  <Link href="/team">
                    Our Team
                  </Link>
                </li>

                <li>
                  <Link href="/whoweare">
                    Who we are
                  </Link>
                </li>
                <li>
                  <Link href="/ourvision">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="/ourmission">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/ourcorevalues">
                    Our Core Values
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="!#">
                Products 
              </Link>
              <ul>
                <li>
                  <Link href="/detergents">
                    Detergents
                  </Link>
                </li>
                <li>
                  <Link href="/disinfectants">
                    Disinfectants
                  </Link>
                </li>
                <li>
                  <Link href="/degreasers">
                    Degreasers
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/services">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact">
                Contact
              </Link>
            </li>
            <li className="getquote">
              <Link href="/contact">
                Get a free quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
