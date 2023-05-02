import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2005 - 2008"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {`Lycée Jardin d'essai - France`}
          </h3>
          <p> Bac Scientifique S, Physical Sciences</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2008 - 2013"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Computer Engineering at Supinfo Paris</h3>

          <h4 className="vertical-timeline-element-subtitle">Prepa + IT specialization</h4>

          <p> IT Engineering Degree (bac+5)</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2014 - 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Team lead - Accenture</h3>
          <h4 className="vertical-timeline-element-subtitle">GDF Suez for 6 months as Developper</h4>
          <h4 className="vertical-timeline-element-subtitle">L'Oreal for 4 years as Team Lead</h4>
          <h4 className="vertical-timeline-element-subtitle">Safran Snecma for 1 year as consultant</h4>
          
          <p>Developed and manage Sap fullstack project in 3 CAC40 french companies</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
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
