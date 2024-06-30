"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/2.png",
    category: "react js",
    name: "NatureNest Website",
    description:
      "NatureNest is a platform dedicated to nature and environmental lovers. This website aims to inspire and empower individuals and communities to contribute to environmental conservation through various initiatives and campaigns. With a primary focus on sustainability and conservation, NatureNest provides up-to-date information on environmental projects, events, news, and opportunities to donate and volunteer.",
    link: "https://aryafrndk.github.io/naturenest/",
    github: "https://github.com/aryafrndk/naturenest",
  },
  {
    image: "/work/1.png",
    category: "Laravel",
    name: "PetPaws",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
    link: "/",
    github: "https://github.com/aryafrndk/PetPaws",
  },
];

// remove category duplicates
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:48">
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
