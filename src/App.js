import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

// Reusable Skill Card Component
const SkillCard = ({ skill }) => (
  <div className="bg-gradient-to-br from-purple-300 via-purple-200 to-purple-100 p-6 rounded-xl shadow-lg text-center font-semibold text-purple-800 hover:scale-105 transition-transform">
    {skill}
  </div>
);

// Reusable Project Card Component
const ProjectCard = ({ title, desc, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-2xl shadow-lg border-t-4 border-purple-400 transition-transform"
  >
    <h3 className="font-bold text-xl mb-2 text-purple-600">{title}</h3>
    <p className="mb-4 text-gray-700">{desc}</p>
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-pink-500 font-semibold hover:underline">
      View Project
    </a>
  </motion.div>
);

function App() {
  const skills = ["Selenium", "JAVA", "BDD", "Cucumber", "JavaScript", "RestAssured", "TestComplete", "JIRA", "Postman", "Azure DevOps", "React", "Node.js", "Tailwind"];
  const projects = [
    { title: "API Automation Framework", desc: "RestAssured, JAVA, TestNg", link: "https://github.com/Arshad2023/API_Automation_Framework" },
    { title: "UI Automation Framework", desc: "Selenium, Java, TestNg, BDD, Cucumber", link: "https://github.com/Arshad2023/Selenium_Automation_Framework" },
    { title: "BubbleSort Game", desc: "Interactive sorting game built with React", link: "https://arshad2023.github.io/BubbleSortGame/" },
    { title: "Image Fetching App", desc: "A React app to fetch and display images from an API..", link: "https://arshad2023.github.io/ImageFetchApp/" },
    { title: "Crud-App", desc: "A React app to perform CRUD operation.", link: "https://github.com/Arshad2023/Crud-App" },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-100 via-red-100 to-green-100 text-purple-900 min-h-screen font-sans">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center h-screen text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-purple-500 to-green-400"
        >
          Arshad Rangrez
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg md:text-xl mb-6 max-w-3xl"
        >
          Automation Expert | Turning complex workflows into seamless, error-free experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex gap-6 justify-center"
        >
          <a href="https://github.com/Arshad2023" target="_blank" rel="noopener noreferrer">
            <Github size={32} className="hover:text-purple-600 transition" />
          </a>
          <a href="https://linkedin.com/in/arshad-rangrez" target="_blank" rel="noopener noreferrer">
            <Linkedin size={32} className="hover:text-blue-600 transition" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&to=arshad301100@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail size={32} className="hover:text-pink-500 transition" />
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-pink-50 to-purple-400">
        <h2 className="text-4xl font-bold mb-6 text-center text-purple-700">About Me</h2>
        <p className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed text-gray-800">
          Arshad Rangrez, an enthusiastic Automation Tester with 4 years of experience. I specialize in crafting efficient, reliable software solutions, solving complex challenges, and turning bugs into learning opportunities with precision and creativity.
        </p>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-20 bg-gradient-to-l from-yellow-50 to-yellow-100">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-600">Skills</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill} skill={skill} />
          ))}
        </div>
      </section>
            {/* Work Experience Section */}
      <section className="px-6 py-20 bg-gradient-to-r from-green-50 to-green-200">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-700">
          Work Experience
        </h2>

        <div className="max-w-5xl mx-auto space-y-8">

          {/* Experience Card 1 (TOP) */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-400">
            <h3 className="text-2xl font-bold text-green-600">Edelweiss</h3>
            <p className="text-gray-600 font-medium">
              Senior QA Automation Engineer | 2025 - Present
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Worked on a trading-based financial application for Edelweiss client.</li>
              <li>Developed and maintained automation scripts using Selenium WebDriver with Java.</li>
              <li>Implemented and worked on a Keyword-Driven Framework for scalable test automation.</li>
              <li>Used Postman for API testing and validation of backend services.</li>
              <li>Worked with tools like SolarPuTTY, and WinSCP for environment access and log verification.</li>
              <li>Logged and tracked defects using JIRA and collaborated with developers for resolution.</li>
            </ul>
          </div>

          {/* Experience Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-purple-400">
            <h3 className="text-2xl font-bold text-purple-600">LTIMindtree</h3>
            <p className="text-gray-600 font-medium">
              QA Automation Engineer | 2022 - 2025
            </p>
            <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
              <li>Design, develop, and maintain automation test scripts using Selenium WebDriver with Java.</li>
              <li>Implement BDD framework using Cucumber for better collaboration with business stakeholders</li>
              <li>Develop and execute API automation tests using RestAssured</li>
              <li>Perform manual API testing using Postman (request validation, status codes, response verification)</li>
              <li>Identify, log, and track bugs using defect management tools (JIRA, Azure DevOps)</li>
              <li>Collaborated in Agile teams to deliver high-quality software solutions.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-20 bg-gradient-to-l from-blue-50 to-blue-100">
        <h2 className="text-4xl font-bold mb-10 text-center text-purple-700">Projects</h2>
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-20 bg-purple-100 text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-700">Contact Me</h2>
        <p className="mb-6 text-gray-700 text-lg md:text-xl ">
          Feel free to reach out via email or connect on LinkedIn/GitHub.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&to=arshad301100@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg hover:scale-105 transition-transform inline-block"
        >
          Send Email
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-center text-gray-50">
        © 2025 Arshad Rangrez. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
