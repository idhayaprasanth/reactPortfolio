import React, { useState, useEffect } from "react";
import sleepImg from "../assets/gif/sleep5.gif";
import bootingGif from "../assets/gif/booting6.gif";
import onImg from "../assets/gif/booting6.gif";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/magicui/terminal";
import { ShineBorder } from "@/components/magicui/shine-border";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Ripple } from "@/components/magicui/ripple";
import { Particles } from "@/components/magicui/particles";
import { Spotlight } from "@/components/ui/spotlight-new";

const CpuPower = () => {
  const [state, setState] = useState("sleep");
  const [imageSrc, setImageSrc] = useState(sleepImg);
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [showIP, setShowIP] = useState(false);

  useEffect(() => {
    if (state === "booting") {
      document.body.style.overflow = "hidden";
      setImageSrc(bootingGif);

      const timer = setTimeout(() => {
        setState("on");
        setImageSrc(onImg);
        setShowNavLinks(true);
        setShowIP(true);
        document.body.style.overflow = "auto";
      }, 1000);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "auto";
      };
    }
  }, [state]);

  const handlePowerOn = () => {
    if (state === "sleep") {
      setState("booting");
    }
  };

  return (
    <div className="relative overflow-hidden">
      <Spotlight />
      <div className="cpu-container">
        {/* Glow */}
        {(state === "booting" || state === "on") && <div className="glow" />}

        {/* CPU Image */}
        <div className="cpu-image-container">
          <img src={imageSrc} alt="CPU State" className="cpu-image" />
        </div>

        {/* Power Button */}
        {state !== "on" && (
          <div className="power-button">
            <button onClick={handlePowerOn}>Power On</button>
          </div>
        )}

        {state === "on" && (
          <div className="terminal">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500  text-center font-sans font-bold">
              Hi, I'm Idhaya Prasanth M
            </h1>
            <h1 className="relative z-10 text-lg md:text-2xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
              A Creative Tech Professional Turning Ideas Into Impactful
              Solutions
            </h1>

            <Terminal>
              <AnimatedSpan delay={200} className="text-green-500">
                <span>What Makes Me Different?</span>
              </AnimatedSpan>

              <AnimatedSpan delay={350} className="text-white-500 ml-6">
                <span>
                  💻 Code with Purpose – I build solutions, not just sites.
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={400} className="text-white-500 ml-6">
                <span>
                  🎯 User-Centered Design – Every detail is designed for real
                  users.
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={500} className="text-white-500 ml-6">
                <span>
                  🚀 Always Evolving – I stay updated with the latest tech
                </span>
              </AnimatedSpan>
              <AnimatedSpan delay={600} className="text-green-500">
                <span>What I Do </span>
              </AnimatedSpan>
              <AnimatedSpan delay={700} className="text-white-500 ml-6">
                <span>🔧 Full-Stack Web Development</span>
              </AnimatedSpan>
              <AnimatedSpan delay={800} className="text-white-500 ml-6">
                <span>🎨 UI/UX Frontend Design</span>
              </AnimatedSpan>
              <AnimatedSpan delay={900} className="text-white-500 ml-6">
                <span>⚙️ Backend & Database Management</span>
              </AnimatedSpan>
              <AnimatedSpan delay={1000} className="text-white-500 ml-6">
                <span>📩 Email & Payment Integration</span>
              </AnimatedSpan>
              <AnimatedSpan delay={1200} className="text-white-500 ml-6">
                <span>📊 Data Analytics & Dashboard Design</span>
              </AnimatedSpan>
            </Terminal>
            {/* ✅ Add FlickeringGrid below terminal */}
          </div>
        )}

        {/* IP Text */}

        {showIP && <div className="ip-text">IP</div>}

        {/* Navigation Links */}
        {showNavLinks && (
          <div className="nav-links">
            <a href="#resume" className="nav-link resume">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              Resume
            </a>
            <a href="#projects" className="nav-link projects">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              Projects
            </a>
            <a href="#skills" className="nav-link skills">
              <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
              Skills
            </a>
          </div>
        )}

        {/* Social Icons */}
        {showNavLinks && (
          <div className="social-icons">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub size={22} />
            </a>
            <div className="social-line" />
          </div>
        )}

        <style>{`
        .cpu-container {
          position: relative;
          height: 100vh;
          background-color: black;
          overflow: hidden;
        }

        .terminal {
  position: fixed;
  bottom: 10px;
  left: 500px;
  background-color: rgb(0, 0, 0); /* Dark blue with opacity */
  backdrop-filter: blur(10px); /* Optional blur */
  transition: all 0.6s ease;
  border-radius: 16px; /* Optional rounded corners */
  display:flex;
  flex-direction:column;
  gap:30px;
  background-image: url(''); /* Replace with your image path */
  background-size: cover;
  background-position: center;
  padding:60px;
  justify-content:center;
  align-items:center;
}

        .glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-20%);
          width: 100%;
          height: 150px;
          background: radial-gradient(ellipse at center top, rgba(17, 24, 147, 0.3), transparent 0%);
          z-index: 1;
          pointer-events: none;
        }

        .cpu-image-container {
          position: fixed;
          bottom: 20px;
          left: 20px;
          width: 510px;
          height: 450px;
          overflow: hidden;
          z-index: 2;
          border-radius: 12px;
          transition: all 0.6s ease;
        }

        .cpu-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .power-button {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 3;
        }

        .power-button button {
          padding: 12px 24px;
          font-size: 18px;
          border-radius: 10px;
          border: 2px solid #fff;
          background-color: black;
          color: orange;
          cursor: pointer;
          box-shadow: 0 0 10px orange;
        }

        .ip-text {
          position: absolute;
          top: 20px;
          left: 20px;
          font-size: 30px;
          font-weight: bold;
          color: white;
          font-family: 'Lobster', sans-serif;
          animation: pulse 1s infinite alternate;
          z-index: 4;
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }

        .nav-links {
          position: fixed;
          top: 20px;
          right: 100px;
          display: flex;
          flex-direction: row;
          gap: 150px;
          z-index: 4;
          animation: slideUp 0.5s ease-out forwards;
        }
        }

        @keyframes slideUp {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .nav-link {
          color: white;
          background: #12094f;
          padding: 8px 16px;
          font-size: 16px;
          border-radius: 8px;
          text-decoration: none;
          opacity: 0;
          transform: translateY(-10px);
          animation: fadeIn 0.5s ease forwards;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .resume {
          animation-delay: 0.2s;
        }

        .projects {
          animation-delay: 0.2s;
        }

        .skills {
          animation-delay: 0.2s;
        }

        .social-icons {
          position: fixed;
          bottom: 0px;
          right: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 5;
          animation: slideUp 0.5s ease-out forwards;
        }

        .social-icon {
          color: white;
          background-color: rgba(255, 255, 255, 0.1);
          padding: 8px;
          border-radius: 50%;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.2);
        }

        .social-line {
          width: 2px;
          height: 218px;
          background-color: white;
          margin-top: 10px;
        }

        /* Responsive for mobile */
        @media (max-width: 768px) {
          .cpu-image-container {
            top: 50%;
            left: 50%;
            bottom: auto;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 260px;
          }

          .nav-links {
            flex-direction: column;
            gap: 10px;
            top: auto;
            bottom: 20px;
            right: auto;
            left: 20px;
            animation: slideUpMobile 1s ease-out forwards;
          }

          .resume,
          .projects,
          .skills {
            font-size: 14px;
            padding: 6px 12px;
          }

          .social-icons {
            right: 10px;
            bottom: 20px;
            gap: 8px;
            animation: slideUpMobile 1s ease-out forwards;
          }

          .social-line {
            height: 40px;
          }
        }

        @keyframes slideUpMobile {
          0% {
            transform: translateY(100%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={20}
        ease={80}
        color="#ffffff"
        refresh
      />
    </div>
  );
};

export default CpuPower;
