import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

// const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      {/* <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link> */}
      <br />
      <br />
      <header>
        <h2>Oleksandr Muzychuk</h2>
        <p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=olexandr00000097@gmail.com" style={{ fontFamily: 'Arial, sans-serif' }}>olexandr00000097@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        {/* Hi, I&apos;m Olex. I am a{' '}
        <a href="https://icme.stanford.edu/">Stanford ICME</a> graduate, YC
        alumnus, and the co-founder and CTO of{' '}
        <a href="https://promptfoo.dev">Promptfoo</a>. Previously, I
        was VP of Engineering at <a href="https://usesmileid.com">SmileID</a>,
        co-founder and CTO of <a href="https://arthena.com">Arthena</a>, and
        co-founded <a href="https://matroid.com">Matroid</a>. */}
        Hi, I&apos;m Olex. With over 6+ years of
        software engineering experience,
        I specialize in developing robust web and mobile
        applications, focusing on backend architecture,
        API development, front-end optimization, and
        innovative problem-solving to improve system
        performance and drive project success.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Resume
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        {/* &copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>. */}
      </p>
    </section>
  </section>
);

export default SideBar;
