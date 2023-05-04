'use client';
import React from "react";
import { ProjectList } from "../../../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

function ProjectDisplay() {
  const { id } = useRouter().query;

  const project = ProjectList[id];
  return (
    <div className="project"> 
      <h1> {project?.name}</h1>
      <Image className="" src={project?.image} height={1651} width={957} alt={project?.name} />
      <Link className="text-3xl text-blue-950 py-6 hover:text-sky-800 hover:text-3xl duration-700 font-bold" target="_blank" href={project?.link ? project?.link : ''}>See more ...</Link>
      <p>
        <b>Skills:</b> {project?.skills}
      </p>
      <Link href={project?.git} target="_blank">
      <GitHubIcon />
      </Link>
    </div>
  );
}

export default ProjectDisplay;
