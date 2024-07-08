"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import { RiArrowDownSLine } from "react-icons/ri";

// components
import Socials from "./Socials";

import "animate.css";

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
    <section className="py-12 xl:py-24 min-h-screen xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto px-4 items-center text-center">
        <div className="flex flex-col items-center xl:flex-row justify-center gap-y-8 xl:gap-x-8">
          {/* text */}
          <div className="flex max-w-[700px] flex-col justify-center text-center xl:text-left">
            <div className="frontend text-sm uppercase font-semibold mb-4 text-primary tracking-[4px] text-center animate__animated animate__fadeInUp animate__delay-1s">
              Frontend Developer
            </div>
            <h1 className="h1 mb-4 text-center animate__animated animate__fadeInUp animate__delay-1s">
              Hello, my name is Arya Frandika Daulay
            </h1>
            <p className="deskripsi text-black text-lg mb-8 font-light max-w-[490px] mx-auto dark:text-white text-center animate__animated animate__fadeInUp animate__delay-1s">
              Based in Bandung, Indonesia, I'm passionate about creating
              engaging, digital experiences on the web.
            </p>
            {/* buttons */}
            <div className="buttoncontact flex flex-col gap-y-3 md:flex-row md:gap-x-3 mx-auto mb-12 items-center justify-center animate__animated animate__fadeInUp animate__delay-1s">
              <Link href="/contact">
                <Button className="gap-x-3">
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
            <Socials containerStyles="sosial flex gap-x-6 mx-auto xl:mx-0 justify-center animate__animated animate__fadeInUp animate__delay-1s" />
            {/* icon */}
            <div className="hidden md:flex absolute left-2/4 transform -translate-x-2/4 bottom-12 animate-bounce">
              <RiArrowDownSLine className="text-5xl text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
