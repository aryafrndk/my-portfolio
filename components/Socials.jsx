"use client";

import {
  RiLinkedinFill,
  RiGithubFill,
  RiTelegramFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.linkedin.com/in/aryafrandikadaulay/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/aryafrndk",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.instagram.com/aryafrndk/",
    name: <RiInstagramFill />,
  },
  {
    path: "https://t.me/mybaeey",
    name: <RiTelegramFill />,
  },
];

import React from "react";

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles} `}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
