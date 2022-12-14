"use client"

import React, { useRef } from 'react';
import Link from 'next/link'
import { Flex, ActionButton } from '@adobe/react-spectrum';
import Contrast from '@spectrum-icons/workflow/Contrast';
import useApp from '../hooks/useApp';
import useOutsideAlerter from '..//hooks/useOutsideAlerter';

const NavLink = ({ children, href, ...rest }) => {

  const location = window.location;
  const isSelected = href === location.pathname;

  return (
    <li className={`spectrum-SideNav-item ${isSelected ? 'is-selected' : ''}`}>
      <Link href={href} className="spectrum-SideNav-itemLink" {...rest} >
        {children}
      </Link>
    </li>
  );
};

const Nav = () => {
  const { toggleColorScheme, navOpen, closeNav } = useApp();

  const navRef = useRef();

  useOutsideAlerter(() => closeNav(), navRef);
  
  return (
    <nav className={navOpen ? 'sidenav sidenav-visible' : 'sidenav'} ref={navRef}>
      <Flex direction="row" justifyContent="space-between" alignItems="center" gap="size-100">
        <h1>My App</h1>
        <ActionButton aria-label="Switch Theme" onPress={() => toggleColorScheme()}>
          <Contrast />
        </ActionButton>
      </Flex>
      <ul className="spectrum-SideNav">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/admin">Admin</NavLink>
        <NavLink href="/unauthorized">Unauthorized</NavLink>
        <NavLink href="/asdf">404</NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
