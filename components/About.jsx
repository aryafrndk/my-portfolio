import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Arya Frandika Daulay",
  },
  {
    icon: <MailIcon size={20} />,
    text: "aryafrandika0408@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bandung, Indonesia",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 87789161803",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Ungraduation of Software Engineer",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 4 Aug, 2003",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Telkom University",
        role: "Software Engineer",
        years: "2021 - Now",
      },
      {
        university: "MAN 1 MEDAN",
        role: "Science Senior High School",
        years: "2018 - 2021",
      },
    ],
  },
  {
    title: "organization",
    data: [
      {
        company: "Telkom Radio",
        role: "Head Of Station Division",
        years: "2022 - 2023",
      },
      {
        company: "Telkom Radio",
        role: "Staff Of Station Divison",
        years: "2021 - 2022",
      },
    ],
  },
];

const skillData = [
  {
    title: "expertise",
    data: [
      {
        name: "HTML5, CSS3, JavaScript",
      },
      {
        name: "React, Next,js",
      },
      {
        name: "Bootstrap 5, Tailwind CSS, Shadcn UI",
      },
      {
        name: "Laravel, Vite",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[868px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row ">
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[502px] xl:border  dark:border-none mx-auto my-auto">
                <TabsTrigger className="w-[162px] xl:w-auto " value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="expertise">
                Expertise
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:text-center">
                      I specialize in crafting intuitive websites with
                      cutting-edge technology, delivering dynamic and engaging
                      user experiences.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-14">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto text-center"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div> Indonesia, English </div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center">My Awesome Journey</h3>
                    {/* experience & education wrapper */}
                    <div className="flex flex-col items-center">
                      <div className="grid md:grid-cols-2 gap-y-10 text gap-x-10">
                        {/* experience */}
                        <div className="flex flex-col gap-y-6 items-center mb-8 md:mb-0">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <Briefcase />
                            <h4 className="capitalize font-medium">
                              {getData(qualificationData, "organization").title}
                            </h4>
                          </div>
                          {/* list */}
                          <div className="flex flex-col gap-y-8 items-center">
                            {getData(qualificationData, "organization").data.map(
                              (item, index) => {
                                const { company, role, years } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group items-start justify-start w-full max-w-md"
                                    key={index}
                                  >
                                    <div className="h-[84px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {company}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                        {/* education */}
                        <div className="flex flex-col gap-y-6 items-center">
                          <div className="flex gap-x-4 items-center text-[22px] text-primary">
                            <GraduationCap size={28} />
                            <h4 className="capitalize font-medium text-center">
                              {getData(qualificationData, "education").title}
                            </h4>
                          </div>
                          {/* list */}
                          <div className="flex flex-col gap-y-8 items-center">
                            {getData(qualificationData, "education").data.map(
                              (item, index) => {
                                const { university, role, years } = item;
                                return (
                                  <div
                                    className="flex gap-x-8 group items-start justify-start w-full max-w-md"
                                    key={index}
                                  >
                                    <div className="h-[84px] bg-border relative ml-2">
                                      <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                    </div>
                                    <div>
                                      <div className="font-semibold text-xl leading-none mb-2">
                                        {university}
                                      </div>
                                      <div className="text-lg leading-none text-muted-foreground mb-4">
                                        {role}
                                      </div>
                                      <div className="text-base font-medium">
                                        {years}
                                      </div>
                                    </div>
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="expertise">
                  <div className="text-center">
                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Expertise</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill lists */}
                      <div>
                        {getData(skillData, "expertise").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-center mx-auto"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image
                                src={imgPath}
                                width={48}
                                height={48}
                                alt=""
                                priority
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
