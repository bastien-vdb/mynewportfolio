import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import Head from "next/head";

function Experience() {
  return (
    <div className="experience">
      <Head>
        <title>Bastien Vermot de Boisrolin experience</title>
        <meta name="description" content="Bastien Vermot de Boisrolin Portfolio experience" />

        {/* <!-- Facebook Meta Tags --/> */}
        <meta property="og:url" content="https://bastiendeboisrolin.info/experience" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Bastien Vermot de Boisrolin experience" />
        <meta property="og:description" content="Bastien Vermot de Boisrolin Portfolio experience" />
        <meta property="og:image" content="https://bastiendeboisrolin.info/opengraph.jpg" />

        {/* <!-- Twitter Meta Tags --/> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="bastiendeboisrolin.info" />
        <meta property="twitter:url" content="https://bastiendeboisrolin.info/experience" />
        <meta name="twitter:title" content="Bastien Vermot de Boisrolin experience" />
        <meta name="twitter:description" content="Bastien Vermot de Boisrolin Portfolio experience" />
        <meta name="twitter:image" content="https://bastiendeboisrolin.info/opengraph.jpg" />
      </Head>
      <VerticalTimeline lineColor="#2980b9">
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2005 - 2008" iconStyle={{ background: "#2980b9", color: "#fff" }} icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">{`Lycée Jardin d'essai - France`}</h3>
          <p> Bac Scientifique S, Physical Sciences</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education" date="2008 - 2013" iconStyle={{ background: "#2980b9", color: "#fff" }} icon={<SchoolIcon />}>
          <h3 className="vertical-timeline-element-title">Computer Engineering at Supinfo Paris</h3>

          <h4 className="vertical-timeline-element-subtitle">Prepa + IT specialization</h4>

          <p> IT Engineering Degree (bac+5)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--work" date="2014 - 2020" iconStyle={{ background: "#f1c40f", color: "#fff" }} icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">Team lead - Accenture</h3>
          <h4 className="vertical-timeline-element-subtitle">GDF Suez for 6 months as Developper</h4>
          <h4 className="vertical-timeline-element-subtitle">{`L'Oreal for 4 years as Team Lead`}</h4>
          <h4 className="vertical-timeline-element-subtitle">Safran Snecma for 1 year as consultant</h4>

          <p>Developed and manage Sap fullstack project in 3 CAC40 french companies</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement className="vertical-timeline-element--work" date="2020 - present" iconStyle={{ background: "#f1c40f", color: "#fff" }} icon={<WorkIcon />}>
          <h3 className="vertical-timeline-element-title">React/Next developper - Freelance</h3>
          <h4 className="vertical-timeline-element-subtitle">Launching of 2 NFT/crypto projects for startups in Web3</h4>
          <h4 className="vertical-timeline-element-subtitle">Help companies support, add, or adjust features or new project in React ecosystem</h4>
          <h4 className="vertical-timeline-element-subtitle">Help companies improve their presence in the Web with react solutions</h4>
          <p>Freelance</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
