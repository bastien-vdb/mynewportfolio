import React from "react";
import {useRouter} from "next/navigation";

function ProjectItem({ image, name, id }) {

  const router = useRouter();
  return (
    <div
      className="projectItem"
      onClick={() => {
        router.push(`/projects/${id}`)
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1> {name} </h1>
    </div>
  );
}

export default ProjectItem;
