import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

import Main from '../layouts/Main';

const About = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    import('../data/about.md').then((res) => {
      fetch(res.default)
        .then((r) => r.text())
        .then(setMarkdown);
    });
  });

  const count = markdown
    .split(/\s+/)
    .map((s) => s.replace(/[^\p{L}\p{N}_]/gu, ''))
    .filter((s) => s.length).length;

  return (
    <Main title="About" description="Александр Рябинин: кратко о себе">
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2>
              <Link to="/about">Обо мне</Link>
            </h2>
            <p>(В {count} словах)</p>
          </div>
        </header>
        <Markdown>{markdown}</Markdown>
      </article>
    </Main>
  );
};

export default About;
