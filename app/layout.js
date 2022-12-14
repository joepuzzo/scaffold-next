"use client"

import '../styles/globals.css'

/* ---- Include global variables first ---- */
import '@spectrum-css/vars/dist/spectrum-global.css';

/* ---- Include only the scales your application needs ---- */
import '@spectrum-css/vars/dist/spectrum-large.css';
import '@spectrum-css/vars/dist/spectrum-medium.css';

/* ---- Include only the colorstops your application needs ---- */
import '@spectrum-css/vars/dist/spectrum-light.css';
import '@spectrum-css/vars/dist/spectrum-dark.css';
import '@spectrum-css/vars/dist/spectrum-darkest.css';

/* ---- Include index-vars.css for all components you need ---- */
import '@spectrum-css/page/dist/index-vars.css';
import '@spectrum-css/typography/dist/index-vars.css';
import '@spectrum-css/sidenav/dist/index-vars.css';

import AppProvider from '../providers/AppProvider.js';
import Nav from "../components/Nav";
import Header from "../components/Header";
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <html lang="en" id="app-html" className="spectrum spectrum--darkest spectrum--medium">
      <head>
        <title>Spectrum Next</title>
      </head>
      <body>
        <AppProvider>
          <Header />
          <Nav />
          <main className="main">
          {children}
          </main>
          <footer>
            <span>App &copy; {new Date().getFullYear()}</span>
            <span>/</span>
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/asdf">Stock 404 Page</Link>
          </footer>
        </AppProvider>
      </body>
    </html>)
}
