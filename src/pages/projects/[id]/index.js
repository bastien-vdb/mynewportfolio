import React from "react";
import { ProjectList } from "../../../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

function ProjectDisplay({ project }) {
  return (
    <div className="project">
      <Head>
        <title>Bastien Deboisrolin Project ${project?.name}</title>
        <meta property="description" content={`Bastien Deboisrolin project ${project?.name}`} />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content={`https://bastiendeboisrolin.info/projects/${project?.name}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Bastien Deboisrolin project ${project?.name}`} />
        <meta property="og:description" content={`Bastien Deboisrolin project ${project?.name}`} />
        <meta property="og:image" content="https://bastiendeboisrolin.info/opengraph.jpg" />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bastiendeboisrolin.info" />
        <meta property="twitter:url" content={`https://bastiendeboisrolin.info/projects/${project?.name}`} />
        <meta name="twitter:title" content={`Bastien Deboisrolin project ${project?.name}`} />
        <meta name="twitter:description" content={`Bastien Deboisrolin project ${project?.name}`} />
        <meta name="twitter:image" content="https://bastiendeboisrolin.info/opengraph.jpg"></meta>
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

//Generate the possible routes for all pages
export async function getStaticPaths() {
  const paths = ProjectList.map((project, key) => {
    const id = String(key);
    return {
      params: { id },
    };
  });

  // { fallback: false } means other routes should 404
  return { paths, fallback: false };
}

//then generate the props for each page
export async function getStaticProps({ params }) {
  const { id } = params;
  const project = ProjectList[id];
  return {
    props: { project }, // will be passed to the page component as props
  };
}

export default ProjectDisplay;
