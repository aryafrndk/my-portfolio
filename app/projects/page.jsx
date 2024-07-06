"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projectData from '@/data/projectData.js';

const Projects = () => {
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="MyProjects section-title mb-8 xl:mb-16 text-center mx-auto animate__animated animate__fadeInDown animate__delay-1s">
          My Projects
        </h2>
        {/* Project grid */}
        <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 mb-[70px] animate__animated animate__fadeInUp animate__delay-1s overflow-hidden">
          {projectData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
