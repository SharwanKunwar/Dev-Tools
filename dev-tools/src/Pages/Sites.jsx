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
  "Documentation & Research"
];

const siteData = {
  "Development Tools": [
    { 
      title: "CodePen", 
      desc: "CodePen is an online code editor and social platform for front-end developers. It lets users write HTML, CSS, and JavaScript directly in the browser, see results instantly, and share or showcase their creative projects with the community.",
      link: "https://codepen.io/",
      logo: "/site/codepen.png"
    },
    {
      title: "GSAP (GreenSock Animation Platform)",
      desc: "GSAP is a high-performance, framework-agnostic JavaScript animation library that lets developers animate CSS, SVG, canvas, and more with precise control. It includes plugins for scroll, morphing, timelines, motion paths, and ensures cross-browser reliability.",
      link: "https://gsap.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDAwMDAnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc1MCcgcj0nMzQnIGZpbGw9JyNmZjlmNWYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkdTQVAgPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Logo Diffusion",
      desc: "Logo Diffusion is an AI‑powered logo maker that turns text prompts, sketches, or existing logos into polished brand assets. It supports vector export, 2D to 3D conversion, style transfer, upscaling and background removal, enabling creators to rapidly build logos and visuals.",
      link: "https://app.logodiffusion.com/?loggedIn=true",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMxMmEyZjMnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzcwJyBmb250LXNpemU9JzI4JyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkxvZ28gRGlmZnVzaW9uPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Grok",
      desc: "Grok is a real‑time AI assistant developed by xAI; it offers conversational search, image generation, voice chat, and deep web integration to help users ask questions, analyze documents or visuals, generate creative content and stay current with evolving data.",
      link: "https://grok.com/?referrer=website",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMTIzNDUnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzcwJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkdSTyBJT0E8L3RleHQ+CiA8L3N2Zz4="
    },
    {
      title: "Sesame Conversational Speech Model",
      desc: "Sesame’s Conversational Speech Model (CSM) is an advanced voice‑assistant technology designed to achieve ‘voice presence’. It generates expressive, context‑aware speech with natural timing, emotion, and tone, enabling human‑like interactions and smoother conversational experiences.",
      link: "https://www.sesame.com/research/crossing_the_uncanny_valley_of_voice#demo",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMyYjZmNWYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI0JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPlNlc2FtZSBWRUE8L3RleHQ+CiA8L3N2Zz4="
    },
    {
      title: "ReactComponents",
      desc: "ReactComponents is a free community‑driven library of ready‑to‑use React UI components and kits. Browse hundreds of buttons, cards, forms, sections and more, copy‑paste into your project, and customize freely to accelerate your front‑end development workflow.",
      link: "https://reactcomponents.com/?type=components",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwYThmZWEiIC8+CiAgPHRleHQgeD0nNjAnIHk9JzcwJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPlJlYWN0Q29tcG9uZW50czwvdGV4dD4KPC9zdmc+"
    },
    {
      title: "JSON Crack",
      desc: "JSON Crack is a browser‑based visualization and editor tool that transforms JSON, YAML, XML, CSV and TOML into interactive graphs for easy analysis and understanding. It supports formatting, querying, converting data formats, exporting diagrams and validating large data structures.",
      link: "https://jsoncrack.com/editor",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDAwMDAiIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkpTT04gQ3JhY2s8L3RleHQ+CiA8L3N2Zz4="
    },
    {
      title: "Aceternity UI",
      desc: "Aceternity UI is a modern component library offering ready‑to‑use React/Next.js components with Tailwind CSS and Framer Motion animations. Developers can copy‑paste components to build polished websites faster, with optional Pro templates and premium packs available.",
      link: "https://ui.aceternity.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMxMmEyZjMnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkFjZXRlcm5pdHkgVUlFPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Stitch by Google",
      desc: "Stitch is a new AI‑powered UI design tool from Google Labs that lets you generate mobile or web interfaces from text prompts, images, or sketches. It exports editable Figma files or frontend code, making design‑to‑code faster for teams and creators.",
      link: "https://stitch.withgoogle.com/?pli=1",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMTIzNDUnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZWxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPlN0aXRjaDwvdGV4dD4KPC9zdmc+"
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
      desc: "Dribbble is a platform where designers showcase their work, get inspired, and connect with the creative community. Browse top design projects, UI/UX concepts, illustrations, animations, and more. Ideal for inspiration, networking, and discovering emerging design trends.",
      link: "https://dribbble.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyNmZjA0MDQnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzQnIGZpbGw9JyNmZmYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkRyaWJiYmxlPC90ZXh0Pgo8L3N2Zz4="
    },
    { 
      title: "Figma Community", 
      desc: "Figma Community is a hub for designers to explore and share UI kits, templates, plugins, and design systems. Access ready-to-use components, collaborate with others, and find resources to speed up your workflow. Perfect for learning and building design projects.",
      link: "https://www.figma.com/community",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDBmZjAnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzQnIGZpbGw9JyNmZmYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkZpZ21hPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Gradient Backgrounds",
      desc: "Gradient Backgrounds by CSS Gradient is a free web tool offering a curated collection of hundreds of blended-color palettes. It lets users explore, preview and apply beautiful gradient backgrounds easily, helping designers and developers build visually rich interfaces quickly.",
      link: "https://cssgradient.io/gradient-backgrounds/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwZmYwZjAnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzAnIGZpbGw9JyNmZmY3MDAnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzcwJyBmb250LXNpemU9JzI0JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkdyYWRpZW50c1Rvb2xzPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Uiverse",
      desc: "Uiverse is a community‑built library of open‑source UI elements. Developers and designers can browse, copy HTML/CSS, Tailwind, React, or Figma code for hundreds of UI components and contribute via GitHub. Free for commercial use under MIT license.",
      link: "https://uiverse.io/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwZjZmOGEnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzMnIGZpbGw9JyNmZjYzMGMnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzcwJyBmb250LXNpemU9JzI2JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPlVJU2VybmVzPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Excalidraw",
      desc: "Excalidraw is a free, open‑source online whiteboard tool with a hand‑drawn style. It gives an infinite canvas, enables real‑time collaboration, supports export (PNG/SVG/JSON), and is ideal for quick diagrams, brainstorming sessions, wireframes and visual note‑taking.",
      link: "https://excalidraw.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDAwMDAnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc1MCcgcj0nMzQnIGZpbGw9JyNmZjlmNWYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzcwJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkVYLzwvdGV4dD4KPC9zdmc+"
    },
    {
      title: "Canva",
      desc: "Canva is an online graphic‑design platform that enables anyone to create social media posts, presentations, posters, videos, logos and more using drag‑and‑drop, templates, stock assets and collaboration features—no advanced design skills needed.",
      link: "https://www.canva.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDAwMDAnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc1MCcgcj0nMzQnIGZpbGw9JyNmZjk0MDAnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkNhbnZhPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Unsplash 3D Renders",
      desc: "Unsplash’s 3D Renders collection features high‑quality three‑dimensional images rendered in software like Blender, 3ds Max or Cinema 4D, ready for download and use in design, web, and creative projects.",
      link: "https://unsplash.com/t/3d-renders",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyM0YjY3ZjMnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzQnIGZpbGw9JyNmZjdkZmYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPlVUQ0wgM0QgUmVuZGVyczwvdGV4dD4KPC9zdmc+"
    },
    {
      title: "Lordicon",
      desc: "Lordicon is a library of over 37,000 customizable animated and static icons for web, mobile, and content design. Choose from various styles, adjust colors, speed, and triggers, then embed or export in formats like Lottie JSON, SVG, GIF, or PNG for seamless integration.",
      link: "https://lordicon.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyM0YjY3ZjMnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzQnIGZpbGw9JyNmZjdkZmYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkxvcmRpY29uPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Remix Icon",
      desc: "Remix Icon is an open‑source library of neutral‑style system icons, meticulously crafted for designers and developers. With 3,000+ icons in outlined and filled formats built on a 24×24 grid, it offers free usage for both personal and commercial projects under Apache‑2.0.",
      link: "https://remixicon.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMGI5ZjMnIC8+CiAgPHRleHQgeD0nNjAnIHk9Jzc3JyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPlJlbWl4IEljb248L3RleHQ+CiA8L3N2Zz4="
    },
    {
      title: "Flaticon Free Icons",
      desc: "Flaticon offers millions of free editable vector icons in SVG, EPS, PSD and PNG formats. Designers and developers can browse a vast library of icons on almost any topic and download them under a free license with attribution required. Premium plans offer more freedom. :contentReference[oaicite:0]{index=0}",
      link: "https://www.flaticon.com/free-icons/fab",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyM0NTY3ZjMnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzQnIGZpbGw9JyNmZjYzMGMnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkZsYXRpY29uPC90ZXh0Pgo8L3N2Zz4="
    },
    {
      title: "Peakpx",
      desc: "Peakpx offers a large collection of free HD wallpapers for desktop, mobile and web use. Browse thousands of high‑resolution images across categories like nature, abstract, tech and 3D and download them for personal and commercial projects with minimal restrictions.",
      link: "https://www.peakpx.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyM0YjY3ZjMnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzQnIGZpbGw9JyNmZjdkZmYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPlBlYWtweDwvdGV4dD4KPC9zdmc+"
    },
    {
      title: "Mobbin",
      desc: "Mobbin is a curated design‑reference library offering over 500,000 real‑world screens from iOS, Android & web apps. Browse flows, patterns and elements by category (e.g., login, onboarding), find inspiration from top apps, and stay updated with new content weekly.",
      link: "https://mobbin.com/discover/apps/ios/latest",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDU1ZmEnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPk1vYmJpbjwvdGV4dD4KPC9zdmc+"
    },
    {
      title: "Carbon",
      desc: "Carbon lets you create and share beautiful images of your source code by customizing syntax theme, fonts, background, window style and more, then exporting to PNG or SVG — perfect for blog posts, presentations and social‑media sharing of your code snippets.",
      link: "https://carbon.now.sh/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDAwMDAnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZWxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkNhcmJvbjwvdGV4dD4KPC9zdmc+"
    },
    {
      title: "MoeWalls",
      desc: "MoeWalls offers a wide collection of free live and animated wallpapers for desktop and mobile. Explore 2D/3D themes across anime, sci‑fi, nature and gaming, in HD and 4K resolutions — ideal for adding vibrant motion to your screens.",
      link: "https://moewalls.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyM0YjY3ZjMnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc2MCcgcj0nMzQnIGZpbGw9JyNmZjdkZmYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZWxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPk1vZVdhbGxzPC90ZXh0Pgo8L3N2Zz4="
    }
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
    {
      title: "Monkeytype",
      desc: "Monkeytype is a minimalistic, highly‑customizable online typing test platform. It offers various test modes (words, quotes, time‑based), tracks speed, accuracy, and progress, and supports many languages and themes for an engaging learning experience.",
      link: "https://monkeytype.com/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDg4ZmYnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzcwJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPk1PTkVZVFlQRTwvdGV4dD4KPC9zdmc+"
    }
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
  "Documentation & Research":[
    {
      title : "Napkin AI",
      desc : "Napkin AI transforms written text into visuals like diagrams, infographics, and flowcharts. It helps users create clear, engaging visuals for presentations, blogs, or social media with AI-generated designs that can be customized and exported easily.",
      link : "https://www.napkin.ai/",
      logo: "data:image/jpeg;base64,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"
    },
    {
      title: "Eraser",
      desc: "Eraser lets engineering teams create architecture diagrams, flowcharts, and technical docs using an infinite canvas, markdown, and diagram-as-code. It supports real-time collaboration, AI-assisted generation, and exports to PNG, PDF, SVG, plus GitHub and Notion integration.",
      link: "https://app.eraser.io/workspace/MlVpqLg4JPK31eji3kqs",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CjxyZWN0IHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyBmaWxsPScjMGYxNzJhJyAvPgo8ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgyMCwyMCknPgogIDxyZWN0IHg9JzAnIHk9JzAnIHdpZHRoPSc4MCcgaGVpZ2h0PSc4MCcgcng9JzEyJyBmaWxsPScjZTZlZWZjJy8+CiAgPHBhdGggZD0nTTE4IDU4IEw2MiAxNCBMNzQgMjYgTDMwIDcwIFIgJyBmaWxsPScjMGYxNzJhJy8+CiA8L2c+Cjwvc3ZnPg=="
    },
    {
      title: "MDN Web Docs",
      desc: "MDN Web Docs (Mozilla Developer Network) is a comprehensive, community-driven resource for web developers. It provides documentation, tutorials, references, and guides for HTML, CSS, JavaScript, APIs, and browser compatibility, helping developers learn and build projects.",
      link: "https://developer.mozilla.org/en-US/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDAwMDAnIC8+CiAgPGNpcmNsZSBjeD0nNjAnIGN5PSc1MCcgcj0nMzQnIGZpbGw9JyNmZjk0MDAnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzYyJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPk1ETjwvdGV4dD4KPC9zdmc+"
    },
    {
      title: "Landing Page Checklist (LandingPage.fyi)",
      desc: "Landing Page Checklist from LandingPage.fyi is a step‑by‑step, curated library of 100+ tools and 16 practical steps to build high‑converting landing pages. It covers everything from domains and builders to copywriting, hosting, analytics and feedback tools.",
      link: "https://www.landingpage.fyi/landing-page-checklist#steps",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyM0ZGQ2YmEnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPkxhbmRpbmcgUGFnZSBDaGVja2xpc3Q8L3RleHQ+CiA8L3N2Zz4="
    },
    {
      title: "roadmap.sh",
      desc: "roadmap.sh offers community‑curated learning paths for developers: role‑based and skill‑based roadmaps with resources, best practices, project ideas and progress tracking. Ideal for navigating what to learn next in areas like frontend, backend, DevOps and more.",
      link: "https://roadmap.sh/",
      logo: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAnIGhlaWdodD0nMTIwJyB2aWV3Qm94PScwIDAgMTIwIDEyMCc+CiAgPHJlY3Qgd2lkdGg9JzEyMCcgaGVpZ2h0PScxMjAnIGZpbGw9JyMwMDAwMDAnIC8+CiAgPHRleHQgeD0nNjAnIHk9JzczJyBmb250LXNpemU9JzI4JyB0ZXh0LWFuY2hvcj0nbWlkZGxlJyBmb250LWZhbWlseT0nQXJpYWwnIGZpbGw9JyNmZmYnPnJvYWRtYXAuY2g8L3RleHQ+CiA8L3N2Zz4="
    }

  ]
};


function Sites() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <Container>
      <div className="bg-black/30 h-screen pt-20 flex text-white backdrop-blur-sm">
        {/* Sidebar */}
        <div className="w-[30%] border-r border-white/20 p-5 overflow-y-auto">
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
        <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 overflow-y-auto">
          {siteData[activeCategory]?.map((site, i) => (
            <div
              key={i}
              className="bg-white/30 backdrop-blur-2xl p-4 rounded-lg h-[280px] hover:bg-white/20 transition-all duration-300 mastWhiteShadow"
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
