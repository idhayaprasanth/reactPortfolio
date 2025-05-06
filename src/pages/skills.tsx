"use client";

import { useState, useEffect } from "react";
import { Vortex } from "@/components/ui/vortex";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { speakIntro } from "./VoiceIntro"; // Ensure correct path
import voice from "../assets/gif/voice.gif";
import voiceimg from "../assets/gif/voice-img.gif";

const Skills = () => {
  const [isVoicePlaying, setIsVoicePlaying] = useState(false);

  useEffect(() => {
    speakIntro(
      "Presenting the skills that define Idhaya Prasanth's technical expertise.",
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
    <div className="min-h-screen min-w-full bg-black text-white py-15 relative overflow-hidden">
      {/* Voice Indicator */}
      <div className="absolute top-0 left-5 z-50">
        <img
          src={isVoicePlaying ? voice : voiceimg}
          alt="Voice Indicator"
          className="w-[80px] h-[80px] sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-contain"
        />
      </div>

      <div className="w-full h-full">
        <Vortex className="w-full h-full">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Frontend */}
              <div className="p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <CardSpotlight>
                  <h3 className="text-2xl font-semibold mb-4 text-purple-300">
                    Frontend
                  </h3>
                  <ul className="list-disc list-inside text-neutral-300 space-y-1">
                    <li>HTML5, CSS3, JavaScript</li>
                    <li>React.js, Next.js</li>
                    <li>Tailwind CSS, Bootstrap</li>
                    <li>Responsive Design</li>
                  </ul>
                </CardSpotlight>
              </div>

              {/* Backend */}
              <div className="p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <CardSpotlight>
                  <h3 className="text-2xl font-semibold mb-4 text-green-300">
                    Backend
                  </h3>
                  <ul className="list-disc list-inside text-neutral-300 space-y-1">
                    <li>Node.js, Express.js</li>
                    <li>MongoDB, PostgreSQL</li>
                    <li>REST APIs, JWT Authentication</li>
                    <li>ORMs: Mongoose & Prisma</li>
                  </ul>
                </CardSpotlight>
              </div>

              {/* Tools & DevOps */}
              <div className="p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <CardSpotlight>
                  <h3 className="text-2xl font-semibold mb-4 text-yellow-300">
                    Tools & DevOps
                  </h3>
                  <ul className="list-disc list-inside text-neutral-300 space-y-1">
                    <li>Git, GitHub, GitLab</li>
                    <li>VS Code, Postman</li>
                    <li>Netlify, Vercel, Heroku</li>
                    <li>CI/CD Basics</li>
                  </ul>
                </CardSpotlight>
              </div>

              {/* Other Skills */}
              <div className="p-6 rounded-xl shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <CardSpotlight>
                  <h3 className="text-2xl font-semibold mb-4 text-pink-300">
                    Other Skills
                  </h3>
                  <ul className="list-disc list-inside text-neutral-300 space-y-1">
                    <li>Problem Solving & DSA</li>
                    <li>Agile & Scrum Basics</li>
                    <li>Team Collaboration</li>
                    <li>Technical Writing</li>
                  </ul>
                </CardSpotlight>
              </div>
            </div>
          </div>
        </Vortex>
      </div>
    </div>
  );
};

export default Skills;
