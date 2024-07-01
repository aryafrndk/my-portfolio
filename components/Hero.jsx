'use client'

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import Socials from "./Socials";

const Hero = () => {
  const handleDownload = () => {
    // URL atau path CV
    const cvUrl = "/cv/cv.pdf";
    // Membuat link untuk mengunduh CV
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "CV_Arya_Frandika_Daulay.pdf"; // Nama file CV yang diunduh
    link.click();
  };

  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Frontend Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Arya Frandika Daulay</h1>
            <p className="text-black text-lg mb-8 font-light max-w-[490px] mx-auto xl:mx-0 dark:text-white">
              Based in Bandung, Indonesia, I'm passionate about creating
              engaging, digital experiences on the web.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-3 ">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="gap-x-3"
                onClick={handleDownload}
              >
                Download CV <Download size={18} />
              </Button>
            </div>
            {/* socials */}
            <Socials containerStyles="flex gap-x-6 mx-auto xl:mx-0" />
          </div>
          {/* image */}
          <div className="hidden xl:flex relative">{/*Image*/}</div>
        </div>
        {/* icon */}
        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
