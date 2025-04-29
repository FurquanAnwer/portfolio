import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded((prev) => !prev);

  return (
    <div className="flex flex-col bg-[#181818] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl h-full">
      <div
        className="h-52 md:h-72 relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      {/* Card Body */}
      <div className="flex flex-col flex-1 text-white p-6 bg-[#181818]">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>

        <p className={`text-[#ADB7BE] ${!isExpanded ? "line-clamp-3" : ""}`}>
          {description}
        </p>

        {/* Toggle Button */}
        {description.length > 120 && (
          <button
            onClick={toggleReadMore}
            className="mt-2 text-sm text-blue-400 hover:underline self-start"
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
