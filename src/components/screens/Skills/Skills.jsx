import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaServer,
  FaHtml5,
} from "react-icons/fa";
import { DiMongodb, DiMysql, DiJavascript1 } from "react-icons/di";
import {
  SiTailwindcss,
  SiCss3,
  SiBootstrap,
  SiThealgorithms,
  SiMicrosoftoffice,
  SiPostman,
  SiNextdotjs
} from "react-icons/si";
import { FcAndroidOs } from "react-icons/fc";
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
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<FaServer color="#F6C915" />} name="Express.js" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<SiNextdotjs color="#000000" />} name="Next.Js" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<DiMysql color="#00758F" />} name="MySQL" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<SiTailwindcss color="#06B6D4" />} name="Tailwind CSS" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard
            icon={<SiThealgorithms color="#FF6D05" />}
            name="Data Structures"
          />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<TbBrandCpp color="#00599C" />} name="C++" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<FaHtml5 color="#E34F26" />} name="HTML5" />
        </motion.div>


        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<SiCss3 color="#2965F1" />} name="CSS3" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<DiJavascript1 color="#F0DB4F" />} name="JavaScript" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<SiBootstrap color="#7952B3" />} name="Bootstrap" />
        </motion.div>



        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard
            icon={<SiMicrosoftoffice color="#D83B01" />}
            name="Microsoft Office"
          />
        </motion.div>

        
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard icon={<SiPostman color="#FF6C37" />} name="Postman" />
        </motion.div>
        <motion.div
          className="w-64"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SkillCard
            icon={<FcAndroidOs color="#3DDC84" />}
            name="Android Dev"
          />
        </motion.div>
        

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
