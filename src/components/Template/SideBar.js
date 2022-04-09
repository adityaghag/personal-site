import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>ADITYA GHAG</h2>
        <p><a href="mailto:aditya.ghag94@gmail.com">aditya.ghag94@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Aditya. I like building things.
        I am a <a href="http://vesit.ves.ac.in/">VESIT</a> graduate and pursuing my second master&apos;s degree at <a href="http://vesit.ves.ac.in/">Rhine-Waal University of Applied Sciences</a>,
        Also working as a blockchain developer(work student) at<a href="https://www.mpdl.mpg.de/en/">MPDL</a>.
        ,Prior to MPDL, I worked at <a href="http://www.blueworld-gmbh.de/">Blueworld-gmbh</a>
        , <a href="https://iconnectsolutions.com/">iConnect Info Solutions</a>
        , <a href="https://www.wohlig.com/">Wohlig Transformations</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
