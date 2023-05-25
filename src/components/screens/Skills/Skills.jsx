import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaPython,
  FaHtml5,
} from "react-icons/fa";
import { DiMongodb, DiMysql, DiJavascript1 } from "react-icons/di";
import {
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiPhp,
  SiThealgorithms,
  SiMicrosoftoffice,
  SiCanva,
  SiFirebase,
  SiPostman,
} from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";
import { FaWordpress } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const SkillCard = ({ icon, name }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-7 flex flex-col items-center justify-center mb-5 mr-5">
      <motion.div
        className="text-blue-500 text-6xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        {icon}
      </motion.div>
      <div className="text-lg font-medium">{name}</div>
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-4xl lg:text-3xl font-medium text-white mt-3 mb-5">
        My Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
        <motion.div
          className="w-full md:w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<FaReact color="#61DBFB" />} name="React" />
        </motion.div>
        <motion.div
          className="w-full md:w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<DiMongodb color="#4CAF50" />} name="MongoDB" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<FaNodeJs color="#3E863D" />} name="Node.js" />
        </motion.div>
        {/* Add the rest of the skill cards */}
      </div>
      <style jsx>{`
        @media only screen and (min-width: 768px) and (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
          .w-full {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
