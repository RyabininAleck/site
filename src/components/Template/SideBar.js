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
        <h2>Алексадр Рябинин</h2>
        <p>
          <a href="mailto:ryabininaleck@yandex.ru">ryabininaleck@yandex.ru</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>Обо мне</h2>
      <p>
        Привет. Я Рябинин Александр, Go разработчик и DeFi энтузиаст.
        Бакалавр по направлению Mathematics and Computer Science:
        <a href="https://iccs.spbstu.ru/edu/02.03.01/02.03.01_01/"> Supercomputer Technologies</a> в
        <a href="https://english.spbstu.ru/university/"> SPbPU </a>
        и прошёл обучение в <a href="https://cbr.ru/fintech/fin_hub/">ЦБ РФ</a>.
        А также являюсь соучредителем <a href="https://">AI assist Lab</a>.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Перейти к резюме
            </Link>
          ) : (
            <Link to="/about" className="button">
              Больше обо мне
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">
        &copy; Александр Рябинин <Link to="/">ryabininaleck@yandex.ru</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
