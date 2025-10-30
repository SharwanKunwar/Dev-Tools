import React, { useState } from "react";
import Container from "../components/Container";
import SiteCard from "../components/SiteCard";

const categories = [
  "Development Tools",
  "Learning Resources",
  "Design & Inspiration",
  "APIs & Integrations",
  "Productivity Boosters",
  "Community & Forums",
];

const siteData = {
  "Development Tools": [
    { 
      title: "CodePen", 
      desc: "CodePen is an online code editor for front-end developers to write HTML, CSS, and JS in the browser, preview results instantly, and share creative projects with the community.",
      link: "https://codepen.io/",
      logo: "/site/codepen.png"
    },
    { 
      title: "JSFiddle", 
      desc: "Collaborative JavaScript playground.",
      link: "https://jsfiddle.net/"
    },
  ],
  "Learning Resources": [
    { 
      title: "freeCodeCamp", 
      desc: "Learn to code with free courses and projects.",
      link: "https://www.freecodecamp.org/"
    },
    { 
      title: "MDN Docs", 
      desc: "Comprehensive documentation for web developers.",
      link: "https://developer.mozilla.org/"
    },
  ],
  "Design & Inspiration": [
    { 
      title: "Dribbble", 
      desc: "Get inspired by top designers and projects.",
      link: "https://dribbble.com/"
    },
    { 
      title: "Figma Community", 
      desc: "Explore UI kits and design templates.",
      link: "https://www.figma.com/community"
    },
  ],
  "APIs & Integrations": [
    { 
      title: "RapidAPI", 
      desc: "Find and connect to thousands of APIs.",
      link: "https://rapidapi.com/"
    },
    { 
      title: "Mockaroo", 
      desc: "Generate fake data for testing and demos.",
      link: "https://www.mockaroo.com/"
    },
  ],
  "Productivity Boosters": [
    { 
      title: "Notion", 
      desc: "Organize your work and life in one workspace.",
      link: "https://www.notion.so/"
    },
    { 
      title: "Trello", 
      desc: "Plan and track projects visually.",
      link: "https://trello.com/"
    },
  ],
  "Community & Forums": [
    { 
      title: "Stack Overflow", 
      desc: "Ask and answer programming questions.",
      link: "https://stackoverflow.com/"
    },
    { 
      title: "Reddit r/webdev", 
      desc: "Join web developers sharing knowledge.",
      link: "https://www.reddit.com/r/webdev/"
    },
  ],
};


function Sites() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <Container>
      <div className="bg-black/30 h-screen pt-20 flex text-white backdrop-blur-sm">
        {/* Sidebar */}
        <div className="w-[25%] border-r border-white/20 p-5 overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-3">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer px-3 py-2 rounded-md transition-all duration-300  ${
                  activeCategory === cat
                    ? "bg-white/30 font-semibold"
                    : "hover:bg-white/10"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </div>

        {/* Site Cards */}
        <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 overflow-y-auto">
          {siteData[activeCategory]?.map((site, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-indigo-400 via-pink-400 p-4 rounded-lg h-[260px] hover:bg-white/20 transition-all duration-300 mastWhiteShadow"
            >
            <SiteCard title = {site.title} des = {site.desc} link={site.link} logo={site.logo}/>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default Sites;
