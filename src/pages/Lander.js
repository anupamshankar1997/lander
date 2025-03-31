import { people, tools, resources } from "../content/mapping";
import React, { useRef } from "react";
import Header from "../components/Header";
import ToolCard from "../components/Tools";
import ResourceCard from "../components/Resources";
import PeopleCard from "../components/People";
import "../styles/Lander.css";
const Lander = () => {
  return (
    <div>
      <Header />

      <div className="page-container">
        <h1>PRIME Technical Toolkit</h1>
        <section className="section-wrapper">
          <p className="intro-text">
            PRIME (Protecting Minority Ethnic Communities Online) is a
            UKRI-funded (EP/W03235X/1, EP/W032333/1, EP/W032341/1, EP/
            W032058/1, EP/W032082/1) 3-year project (2022-2025). The project
            aims to improve understanding of Minority Ethnic (ME) communities'
            online experiences, particularly in accessing key services related
            to <strong>health, social housing, and energy.</strong> It seeks to
            identify the types and nature of <strong>online harms</strong> these
            individuals may face and recommend solutions to mitigate them
            through privacy-enhancing technologies and responsible AI. These
            solutions are part of the PRIME Technical Toolkit. Various tools,
            prototypes, guidelines included in this toolkit focus on either:
            <br></br>
            <ul>
              <li>
                Providing more privacy and security to minoritised ethnic
                communities while using digital services
              </li>
              <li>
                Enabling stakeholders to better understand the needs and
                requirements of such communities
              </li>
            </ul>
          </p>
        </section>
        <section>
          <h2>Prototypes and Guidelines</h2>
          <div className="cards-container">
            {tools.map((tool, index) => (
              <ToolCard key={index} tool={tool} />
            ))}
          </div>
        </section>

        <section>
          <h2>Resources</h2>
          <div className="cards-container">
            {resources.map((resource, index) => (
              <ResourceCard key={index} resource={resource} />
            ))}
          </div>
        </section>

        <section>
          <h2>People Behind the Toolkit</h2>
          <div className="people-container">
            {people.map((person, index) => (
              <PeopleCard key={index} person={person} />
            ))}
          </div>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p id="footer">
            For any queries or for integrating your data in our prototypes,
            please contact:
            <br />
            <ul>
              <li>
                Prof Lynne Baillie (
                <a href="mailto:l.baillie@hw.ac.uk">l.baillie@hw.ac.uk</a>)
              </li>
              <li>
                Dr Mehdi Rizvi (
                <a href="mailto:s.rizvi@hw.ac.uk">s.rizvi@hw.ac.uk</a>) or
              </li>
            </ul>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Lander;
