import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description=" Александр Рябинин — Golang разработчик и DeFi энтузиаст. Бакалавр МКН по суперкомпьютерным технологиям, студент финтех хаба ЦБ. Преподаватель ИИ и SPE в СПбПУ, "
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>
            <Link to="/">Привет!</Link>
          </h2>
          <p>
            Это сайт обо мне и моих достижениях :)
          </p>
        </div>
      </header>
      <p>
        {' '}
        Я РАД ПОЗНАКОМИТЬСЯ С ТОБОЙ!
      </p>
      <p>
        Можешь узнать что-то <Link to="/about">обо мне</Link>,{' '}
        прочитать мое <Link to="/resume">резюме</Link>, ознакомиться с некоторыми <Link to="/projects">проектами</Link>,{' '}
        и  <Link to="/contact">связаться</Link> со мной.
      </p>
      <p>
        {' '}
        Шаблон сайта{' '}
        <a href="https://github.com/mldangelo/personal-site">тут</a>.
      </p>
    </article>
  </Main>
);

export default Index;
