"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/2.png",
    category: "react js, Vite, Tailwindcss",
    name: "NatureNest Website",
    description:
      "NatureNest: News, projects and events for earth sustainability. Support conservation by donating and participating in volunteer programs.",
    link: "https://aryafrndk.github.io/naturenest/",
    github: "https://github.com/aryafrndk/naturenest",
  },
  {
    image: "/work/1.png",
    category: "Laravel, bootstrap",
    name: "PetPaws",
    description:
      "A platform that facilitates the buying and selling and adoption of cats safely and comfortably for animal lovers, with complete features to make searching easier.",
    link: "/",
    github: "https://github.com/aryafrndk/PetPaws",
  },
  {
    image: "/work/3.png",
    category: "react js, Vite, Tailwindcss",
    name: "To-Do List App",
    description:
      "Todo List app built with ReactJS. Features: easy-to-use interface, fast and responsive, TailwindCSS, saved in localStorage.",
    link: "https://aryafrndk.github.io/my-todo-app/",
    github: "https://github.com/aryafrndk/my-todo-app",
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
