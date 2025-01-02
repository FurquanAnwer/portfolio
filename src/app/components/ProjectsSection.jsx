"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "ShopMart",
    description: "An e-commerce application built using Next.js, featuring a responsive design and user authentication. It includes an Add to Cart functionality, allowing users to easily manage their shopping experience.",
    image: "/images/project_2.png",
    tag: ["All Projects", "Frontend Projects"],
    gitUrl: "https://github.com/FurquanAnwer/Shopmart_hiring",
    previewUrl: "https://hiring-challenge-lake.vercel.app",
  },
  
  {
    id: 2,
    title: "Youtube Clone",
    description: "A YouTube clone built using React, offering video searching, video viewing, and commenting features in a user-friendly interface. The application utilizes a modern design and efficient state management to enhance the user experience while browsing and interacting with content.",
    image: "/images/project_3.png",
    tag: ["All Projects", "Frontend Projects"],
    gitUrl: "https://github.com/FurquanAnwer/youtube-clone",
    previewUrl: "https://youtube-clone-lw24.vercel.app/",
  },
  {
    id: 3,
    title: "Holiday Inn",
    description: "A Hotel Internal Management App built using React.js and Styled Components, with Supabase for backend functionality. It optimizes data fetching with React Query and manages state using Context API.",
    image: "/images/project_1.png",
    tag: ["All Projects", "Frontend Projects"],
    gitUrl: "https://github.com/FurquanAnwer/Hotel-Internal-Management-App",
    previewUrl: "https://hotel-internal-management-app.vercel.app/login",
  },

  {
    id: 4,
    title: "React Quiz",
    description: "A React quiz application leveraging the useReducer hook for state management, providing a dynamic and interactive user experience. Users can answer questions, track their progress, and receive instant feedback on their performance.",
    image: "/images/project_4.png",
    tag: ["All Projects", "Frontend Projects"],
    gitUrl: "https://github.com/FurquanAnwer/ReactQuiz",
    previewUrl: "https://react-quiz-bice-ten.vercel.app/",
  },
  {
    id: 5,
    title: "Portfolio",
    description: "A modern personal portfolio built with Next.js, showcasing projects, skills, and experience with a sleek design and fast performance. Fully responsive and optimized for seamless user interaction across all devices.",
    image: "/images/portfolio.png",
    tag: ["All Projects", "Frontend Projects"],
    gitUrl: "https://github.com/FurquanAnwer/portfolio",
    previewUrl: "https://www.furquananwer.xyz",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All Projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-1 py-6">
        <ProjectTag 
          onClick={handleTagChange}
          name="All Projects"
          isSelected={tag === "All Projects"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend Projects"
          isSelected={tag === "Web Projects"}
        />

      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;