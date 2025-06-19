import React from "react";
import "./styles.scss";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaCode, FaDatabase, FaDev, FaMobileAlt } from "react-icons/fa";
import {
  SiSpring,
  SiAngular,
  SiJavascript,
  SiJava,
  SiSpringboot,
} from "react-icons/si";
import {
  DiMongodb,
  DiAngularSimple,
  DiAndroid,
  DiApple,
  DiAtom,
  DiReact,
  DiJava,
} from "react-icons/di";
import { IoLogoNodejs } from "react-icons/io5";
import { GrCloud } from "react-icons/gr";
import { AiOutlineJava } from "react-icons/ai";

const personalInfo = [
  {
    label: "Name",
    value: "Ramanuj Mishra",
  },
  {
    label: "Email",
    value: "mishra.ramanuj@gmail.com",
  },
  {
    label: "Org.    ",
    value: "SR Software Solutions.inc",
  },
  {
    label: "Email",
    value: "srsoftware.inc@gmail.com",
  },
];

const aboutText =
  "I am a  Dev lead/Full stack developer with over 14+ years of experience in various areas of software development and IT technologies. Specialized in Angular, Java, Spring Boot, Struts2, Hibernate, Spring MVC, Oracle. Enthusiastic, self-motivated, ability to work in a team, manage a group of people, manage projects and clients, develop and implement new software codes, cope well within a fast-paced setting, communicate effectively at all levels, and interact supportive within a team environment.";

const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headerText="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>Full stack developer</h3>
          <p>{aboutText}</p>

          <h3 className="personalInfoHeaderText">Personal Information</h3>
          <ul>
            {personalInfo.map((info, index) => (
              <li key={index}>
                <span className="title">{info.label}:</span>
                <span className="value"> {info.value}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="about__content__servicesWrapper">
          <div className="about__content__servicesWrapper__innerContent">
            <div>
              <FaDev size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <DiAngularSimple
                size={60}
                color="var(--yellow-theme-main-color)"
              />
            </div>

            <div>
              <DiAndroid size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <DiReact size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiSpringboot size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <DiApple size={60} color="var(--yellow-theme-main-color)" />
            </div>

            <div>
              <AiOutlineJava size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
