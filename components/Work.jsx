"use client";
import Link from "next/link";
import { Button } from "./ui/button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination } from "swiper/modules";

// Components
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
];

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            A concise overview of selected frontend development projects, showcasing skills and capabilities.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[600px] bg-white dark:bg-secondary/0 "
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
