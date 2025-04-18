import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Контакты"
    description="Связаться с Александром Рябининым по email или телефону"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Контакты</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Не стесняйся обращаться! Ты можешь написать мне по адресу: </p>
        <EmailLink />
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
