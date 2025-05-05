"use client";

import { Vortex } from "@/components/ui/vortex";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Skills = () => {
  return (
    <div className="min-h-screen min-w-full bg-black text-white py-15 relative overflow-hidden">
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
