import React from "react";
import ProjectItem from "../../components/ProjectItem";
import { ProjectList } from "../../helpers/ProjectList";
import Head from "next/head";

function Projects() {
  return (
    <div className="projects">
      <Head>
        {/* <!-- HTML Meta Tags --> */}
        <title>Bastien Vermot de boirolin projects</title>
        <meta name="description" content="Bastien Vermot de boirolin projects" />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://bastiendeboisrolin.info/projects" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bastien Vermot de boirolin projects" />
        <meta property="og:description" content="Bastien Vermot de boirolin projects" />
        <meta property="og:image" content="https://bastiendeboisrolin.info/opengraph.jpg" />

        {/* <!-- Twitter Meta Tags --/> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bastiendeboisrolin.info" />
        <meta property="twitter:url" content="https://bastiendeboisrolin.info/projects" />
        <meta name="twitter:title" content="Bastien Vermot de boirolin projects" />
        <meta name="twitter:description" content="Bastien Vermot de boirolin projects" />
        <meta name="twitter:image" content="https://bastiendeboisrolin.info/opengraph.jpg" />

      </Head>
      <div data-aos="fade-up" className="projectList">
        {ProjectList.map((project, idx) => {
          return <ProjectItem key={idx} id={idx} name={project.name} image={project.image.src} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
