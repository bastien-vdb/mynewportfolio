import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Image from "next/image";
import profilePicture from "/src/assets/profile.jpg";
import Link from "next/link";

function HomePage() {
    return (
        <div className="home">
            <div className="about space-y-10">
                <Image className="shadow-2xl shadow-yellow-100 rounded-full w-40" src={profilePicture} alt="Profile Picture" width={200} height={200} />
                <h2> Hi, I am Bastien</h2>
                <div className="prompt space-y-10">
                    <p>A french software developer with a passion for learning and creating.</p>
                    <div className="flex items-center justify-center">
                        <Link href="https://fr.linkedin.com/in/bastien-vermot-de-boisrolin-10051a72" passHref={true} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                            <LinkedInIcon />
                        </Link>
                        <Link href="mailto:bastien.deboisrolin@gmail.com?subject=Contact" passHref={true} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                            <EmailIcon />
                        </Link>
                        <Link href="https://github.com/bastien-vdb/" passHref={true} target="_blank" rel="noopener noreferrer" className="hover:scale-110 duration-300">
                            <GithubIcon />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="skills">
                <h1> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End</h2>
                        <span>
                            ReactJS, NextJS, Server Component (SSR), UseQuery, SWR, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, Zustand, Zod
                        </span>
                    </li>
                    <li className="item">
                        <h2>Back-End</h2>
                        <span>
                            NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2>Languages</h2>
                        <span>TypeScript, JavaScript, Python, ABAP</span>
                    </li>
                </ol>
            </div>
        </div>
    );
}

export default HomePage;
