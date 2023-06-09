import React, { useEffect } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Image from "next/image";
import profilePicture from "/src/assets/profile.jpg";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Head from "next/head";
import Buttons from '../components/Buttons';

function HomePage() {

    useEffect(() => {
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 3000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, []);

    return (
        <div className="home">
            <Head>
                <title>Bastien VDB Portfolio</title>
                <meta name="description" content="Bastien Vermot de boirolin Portfolio homepage" />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://bastiendeboisrolin.info" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Bastien VDB Portfolio" />
                <meta property="og:description" content="Bastien Vermot de boirolin Portfolio homepage" />
                <meta property="og:image" content="https://bastiendeboisrolin.info/opengraph.jpg" />

                {/* <!-- Twitter Meta Tags --/> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="bastiendeboisrolin.info" />
                <meta property="twitter:url" content="https://bastiendeboisrolin.info" />
                <meta name="twitter:title" content="Bastien VDB Portfolio" />
                <meta name="twitter:description" content="Bastien Vermot de boirolin Portfolio homepage" />
                <meta name="twitter:image" content="https://bastiendeboisrolin.info/opengraph.jpg" />

            </Head>
            <div className="about space-y-10">
                <Image data-aos="fade-down" className="shadow-2xl shadow-yellow-100 rounded-full w-40" src={profilePicture} alt="Profile Picture" width={200} height={200} />
                <h2 data-aos="fade-up"> Hi, I am Bastien</h2>
                <div data-aos="fade-down" className="prompt space-y-10">
                    <p>A french software developer with a passion for learning and creating. After 7 years in Accenture working for L'Oreal, Safran and GDF Suez, I decided to become a freelancer and deliver modern, reactive and with less frictions as possible, react front end interfaces with all the ecosystem</p>
                    <div data-aos="zoom-in" className="flex items-center justify-center">
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
                <h1 data-aos="zoom-in"> Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2 data-aos="fade-up"> Front-End</h2>
                        <span data-aos="fade-down">
                            ReactJS, NextJS, Server Component (SSR), UseQuery, SWR, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, Zustand, Zod
                        </span>
                    </li>
                    <li className="item">
                        <h2 data-aos="fade-up">Back-End</h2>
                        <span data-aos="fade-down">
                            NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, MS SQL
                        </span>
                    </li>
                    <li className="item">
                        <h2 data-aos="fade-up">Languages</h2>
                        <span data-aos="fade-down">TypeScript, JavaScript, Python, ABAP</span>
                    </li>
                </ol>
                <Link data-aos="zoom-in-down" href="/projects" className="mt-28">
                    <Buttons>
                        <span className="
                        text-yellow-500
                        hover:text-blue-500
                        font-bold 
                        animate-pulse
                        shadow shadow-xl
                        hover: shadow-none
                        bg-sky-600
                        p-3
                        px-6
                        rounded-xl
                        hover:bg-transparent
                        text-sm
                        sm:text-lg"
                        >
                            See My Projects</span>
                    </Buttons>
                </Link>
            </div>
        </div>
    );
}

export default HomePage;
