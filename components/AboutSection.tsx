import React from "react";
import Image from "next/image";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "NextJs" },
  { skill: "NodeJs" },
  { skill: "ExpressJs" },
  { skill: "GraphQL" },
  { skill: "MySQL" },
  { skill: "Git" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="text-justify">
              Hi, my name is Mayur and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software developer.
            </p>
            <br />
            <p className="text-justify">
              With 5 years of experience in the industry, I have developed a
              strong foundation in full stack development. Throughout my career,
              I have worked on a variety of projects, from small-scale web
              applications to large enterprise systems.
            </p>
            <br />
            <p className="text-justify">
              As a freelancer, I am committed to delivering projects on time and
              within budget, while maintaining a high standard of quality. I am
              a quick learner and always looking for new challenges to expand my
              skill set. I have experience working both independently and as
              part of a team, and I am comfortable communicating with clients
              and stakeholders at all levels.
            </p>
            <br />
            <p className="text-justify">
              I have a passion for technology and a desire to always push the
              limits of what is possible. I am excited to see where my career
              takes me and am always open to new opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
