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
        <section className="section-wrapper">
          <p className="intro-text">
            PRIME (Protecting Minority Ethnic Communities Online) is a
            UKRI-funded (EP/W032333/1) 3-year project (2022-2025). Prototypes
            developed under PRIME focus on either:
            <br />
            - Providing more privacy and security to minoritised ethnic
            communities while using digital services
            <br />- Enabling stakeholders to better understand the needs and
            requirements of such communities
          </p>
        </section>
        <section>
          <h2>Our Prototypes</h2>
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
          <h2>People</h2>
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
            please contact: Mehdi Rizvi (s.rizvi@hw.ac.uk) or Lynne Baille
            (l.baillie@hw.ac.uk)
          </p>
        </section>
      </div>
    </div>
  );
};

export default Lander;
