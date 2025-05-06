import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { speakIntro } from "./VoiceIntro"; // Ensure correct path
import voice from "../assets/gif/voice.gif";
import voiceimg from "../assets/gif/voice-img.gif";
import { useState, useEffect } from "react";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Instant Bus Ticketing System",
    description:
      "A web app to register buses, book tickets, make payments, and generate QR codes for Tamil Nadu route buses.",
    imageUrl:
      "https://img.freepik.com/free-photo/medium-shot-woman-holding-phone_23-2148989577.jpg?ga=GA1.1.1598236139.1745770518&semt=ais_hybrid&w=740",
    link: "#",
  },
  {
    title: "Library Management System",
    description:
      "PHP-based system to manage book borrowing, returns, fine calculation, and email notifications using PHPMailer.",
    imageUrl:
      "https://img.freepik.com/free-photo/still-life-books-versus-technology_23-2150062975.jpg?ga=GA1.1.1598236139.1745770518&semt=ais_hybrid&w=740",
    link: "#",
  },
  {
    title: "Attendance Management System",
    description:
      "Django project with dashboards for HOD, staff, and students to mark, view, and analyze semester attendance.",
    imageUrl:
      "https://img.freepik.com/free-vector/choice-worker-theme_23-2148617959.jpg?ga=GA1.1.1598236139.1745770518&semt=ais_hybrid&w=740",
    link: "#",
  },
];

const Projects: React.FC = () => {
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);

  useEffect(() => {
    speakIntro(
      "Welcome! Discover cutting-edge projects",
      () => {
        console.log("Speech started");
        setIsVoicePlaying(true);
      },
      () => {
        console.log("Speech ended");
        setIsVoicePlaying(false);
      }
    );
  }, []);

  return (
    <WavyBackground>
      <div className="min-h-screen text-white p-6">
        <div className="absolute top-0 left-10 z-50 ">
          <img
            src={isVoicePlaying ? voice : voiceimg}
            alt="Voice Indicator"
            className="w-[120px] h-[120px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px]  object-contain "
          />
        </div>

        <h1 className="text-2xl font-bold  animate-pulse text-purple-400 absolute top-10 right-5 z-50">
          My Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-30 ml-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`backdrop-blur-sm bg-gray-800/80 border border-white/20 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 transform hover:scale-105 ${
                index === 0 ? "sm:mt-20" : ""
              }`}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 text-sm sm:text-base">
                {project.description}
              </p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition duration-300 text-sm"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </WavyBackground>
  );
};

export default Projects;
