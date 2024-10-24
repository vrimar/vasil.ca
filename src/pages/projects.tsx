import React from "react";
import { Layout } from "../components/Layout";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <Layout>
      <div className="container project-container">
        <h2>
          Projects<span className="accent-color">.</span>
        </h2>
        <div className="projects">
          {projects.map((project) => (
            <a
              key={project.name}
              className="project-item"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <div className="project-item-tag">{project.tag}</div>
              <div className="project-item-label">{project.name}</div>
              <div className="project-item-content">{project.description}</div>
            </a>
          ))}
        </div>
      </div>
    </Layout>
  );
}
