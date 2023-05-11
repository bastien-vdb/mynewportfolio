import React from "react";
import ProjectItem from "../../components/ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";
import Head from "next/head";

function Projects() {
  return (
    <div className="projects">
      <Head>
        <title>Bastien Deboisrolin Projects</title>
        <meta property="og:title" content="Bastien Deboisrolin projects" />
        <meta property="og:description" content="Bastien Deboisrolin projects" />
        <meta property="og:image" content="/opengraph.jpg" />
      </Head>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem key={idx} id={idx} name={project.name} image={project.image.src} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
