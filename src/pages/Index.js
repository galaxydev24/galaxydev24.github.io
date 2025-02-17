import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={
      "Oleksandr Muzychuk's personal website. New York based Stanford ICME graduate, "
      + 'VP of Engineering at Smile Identity, co-founder of Arthena and Matroid, and YC Alumni.'
    }
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Schedule a Call with Oleksandr</Link>
          </h2>
          <p>
            An easy and convenient way to book a call with Oleksandr,
            designed to ensure seamless communication and quick scheduling.
          </p>
        </div>
      </header>
      <p>
        {' '}
        Welcome to my portfolio site. I&apos;m excited to have you here! <br />Please feel free to read more{' '}
        <Link to="/about">about me</Link>, or you can check out my{' '}
        <Link to="/resume">resume</Link>, <Link to="/projects">projects</Link>,{' '}
        {/* view <Link to="/stats">site statistics</Link> */}
        or{' '}
        <Link to="/contact">contact</Link> me. <br />Explore my journey, dive into the projects I&apos;m passionate about,
        and get to know the work that drives me. Whether you&apos;re looking for insight,
        collaboration, or just a chat, I&apos;m here to connect with you.
      </p>
      <p>
        {' '}
        Ready to take the next step?<br />
        {' '}
        <a href="https://cal.com/olex-muzychuk/meet-olex" style={{ color: '#007BFF', fontSize: '22px' }}>Click here to Start Booking Calls Today</a> -
        {' '}
        Let’s create something amazing together!
        {' '}
      </p>
    </article>
  </Main>
);

export default Index;
