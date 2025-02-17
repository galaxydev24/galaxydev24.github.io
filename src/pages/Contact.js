import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
// import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Oleksandr Muzychuk via email @ hi@mldangelo.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: </p>
        {/* <EmailLink /> */}
        <p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=olexandr00000097@gmail.com">olexandr00000097@gmail.com</a>
        </p>
      </div>
      {/* <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163278.5619689677!2d28.352120694531244!3d50.250334600000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c692aca6437b9%3A0x9e2d3d2e2a92d3fe!2sUkrposhta%2012421!5e0!3m2!1sen!2sru!4v1739342777235!5m2!1sen!2sru"
            width="836"
            height="378"
            loading="lazy"
            title="Location Map"
            allowfullscreen=""
          />
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form action="#" className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
          />

          <button className="form-btn" type="submit" data-form-btn>
            <ion-icon name="paper-plane" />
            <span>Send Message</span>
          </button>
        </form>
      </section> */}
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
