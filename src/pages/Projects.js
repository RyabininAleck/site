import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects = () => (
  <Main title="Projects" description="О проектах Александра">
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2>
            <Link to="/projects">Проекты</Link>
          </h2>
          <p>Подборка проектов, за которые мне не слишком стыдно</p>
        </div>
      </header>
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </article>
  </Main>
);

export default Projects;
