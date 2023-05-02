import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Image from "next/image";

function HomePage() {
    return (
        <div className="home">
            <div className="about space-y-10">
                <div className="shadow-2xl shadow-yellow-100 rounded-full">
                    <Image src="/assets/profile.png" alt="Profile Picture" width={200} height={200} />
                </div>
                <h2> Hi, I am Bastien</h2>
                <div className="prompt space-y-10">
                    <p className="text-4xl">A french software developer with a passion for learning and creating.</p>
                    <div className="flex items-center justify-center">
                    <LinkedInIcon />
                    <EmailIcon />
                    <GithubIcon />
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
