import React from "react";
import { ProjectList } from "../../../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function ProjectDisplay() {
  const { id } = useRouter().query;

  const project = ProjectList[id];
  return (
    <div className="project">
      <Head>
        <title>Bastien Deboisrolin Project ${project?.name}</title>
        <meta property="og:title" content={`Bastien Deboisrolin project ${project?.name}`} />
        <meta property="og:description" content={`Bastien Deboisrolin project ${project?.name}`} />
        <meta property="og:image" content="/opengraph.jpg" />
      </Head>
      <h1> {project?.name}</h1>
      <Image className="" src={project?.image} height={1651} width={957} alt={project?.name} />
      <Link className="text-3xl text-blue-950 py-6 hover:text-sky-800 hover:text-3xl duration-700 font-bold" target="_blank" href={project?.link ? project?.link : ""}>
        See more ...
      </Link>
      <p>
        <b>Skills:</b> {project?.skills}
      </p>
      <Link href={project?.git ? project?.git : ""} target="_blank">
        <GitHubIcon />
      </Link>
    </div>
  );
}

ProjectDisplay.getInitialProps = ({ query }) => {
  const { id } = query;
  const project = ProjectList[id];
  return { project };
};

export default ProjectDisplay;
