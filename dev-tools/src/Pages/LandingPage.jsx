import React from "react";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const developmentResource = [
  {
    title: "Development Tools",
    desc: "Find code editors, testing platforms, and online compilers to speed up your workflow.",
  },
  {
    title: "Learning Resources",
    desc: "Explore tutorials, documentation, and interactive platforms to sharpen your skills.",
  },
  {
    title: "Design & Inspiration",
    desc: "Get inspired with UI libraries, color palettes, and design resources for your next project.",
  },
  {
    title: "APIs & Integrations",
    desc: "Browse powerful APIs, mock data tools, and endpoints for your apps.",
  },
  {
    title: "Productivity Boosters",
    desc: "Stay organized with time-saving apps and project management tools.",
  },
  {
    title: "Documentation & Research",
    desc: "Connect with other developers and grow through discussion and collaboration.",
  },
  
];

function LandingPage() {
  return (
    <Container>
      <div className="w-full">
        <div className="flex  flex-col gap-3">
          <div className=" w-full h-full relative">
            <video
              src="/video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-screen object-cover"
            />

            <div className=" h-screen absolute top-0 w-full lg:pt-20 lg:p-10 flex flex-col gap-3">
              {/* top div  */}
              <div className=" w-full h-6/12 flex gap-3">
                <div className="lg:w-[70%] bg-black/50 rounded-md p-8 mastWhiteShadow flex flex-col justify-center">
                  <h1 className="lg:text-4xl text-2xl font-extrabold text-white drop-shadow-md tracking-wide">
                    The Developer’s Vault
                  </h1>

                  <p className="lg:text-lg text-white/80 mt-4 leading-relaxed">
                    Unlock a world of essential tools, creative resources, and
                    powerful platforms — all carefully handpicked to make your
                    development journey smarter, faster, and more inspiring.
                  </p>

                  <p className="text-sm text-white/60 mt-2 italic">
                    Everything a developer needs, gathered in one elegant
                    collection.
                  </p>

                  <Link to="sites">
                    <button className="mt-6 px-8 py-2 bg-linear-to-r from-blue-500/60 to-purple-500/60 text-white font-semibold rounded-lg border border-white/30 hover:from-blue-600 hover:to-purple-600 hover:scale-105 transition-all duration-300 shadow-md">
                    Explore Now 🚀
                  </button>
                  </Link>
                </div>

                <div className="w-[30%] bg-black/50 rounded-md mastWhiteShadow lg:block hidden">
                  {/* <img src="/download.png" alt="" /> */}
                </div>
              </div>

              {/* bottom div  */}
              <div className=" w-full h-6/12 flex gap-3">
                <div className="w-[30%] bg-black/50 rounded-md mastWhiteShadow lg:block hidden">
                  {/* <img src="/download.png" alt="" /> */}
                </div>
                <div className="lg:w-[70%] bg-black/50  rounded-md p-6 grid grid-cols-2 gap-3 overflow-y-scroll max-h-full mastWhiteShadow">
                  {developmentResource.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/30 backdrop-blur-2xl text-white p-3 rounded-sm mastBlueShadow lg:py-5 lg:px-5"
                    >
                      <h1 className="text-xl mb-1 font-medium">{item.title}</h1>
                      <p className="text-neutral-300 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default LandingPage;
