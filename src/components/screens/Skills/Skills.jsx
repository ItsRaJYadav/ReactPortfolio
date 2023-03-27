import React from "react";
import { motion } from "framer-motion";
import { DiMongodb, DiMysql, DiJavascript1 } from 'react-icons/di';
import { SiTailwindcss, SiCss3, SiBootstrap, SiPhp, SiThealgorithms, SiMicrosoftoffice, SiCanva,SiFirebase,SiPostman } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { FcAndroidOs } from 'react-icons/fc';
import {FaWordpress } from 'react-icons/fa';



import { FaReact, FaNodeJs, FaServer, FaPython, FaHtml5 } from "react-icons/fa";

const SkillCard = ({ icon, name }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-7 flex flex-col items-center justify-center mb-5 mr-5" >
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
        <h1 className="text-3xl md:text-4xl lg:text-3xl font-medium text-white mt-3 mb-5">My Skills</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-2">
          <motion.div className="w-full md:w-64" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <SkillCard icon={<FaReact color="#61DBFB" />} name="React" />
          </motion.div>
          <motion.div className="w-full md:w-64" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <SkillCard icon={<DiMongodb color="#4CAF50" />} name="MongoDB" />
          </motion.div>
          <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<FaNodeJs color="#3E863D" />} name="Node.js" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<FaServer color="#FFA500" />} name="Express" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<DiMysql color="#00758F" />} name="MySql" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<FaPython color="#3776AB" />} name="Python" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<FaHtml5 color="#F16529" />} name="HTML" />
                </motion.div>

                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiBootstrap color="#563d7c" />} name="Bootstrap" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiCss3 color="#1572B6" />} name="CSS" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiTailwindcss color="#38B2AC" />} name="Tailwind CSS" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<DiJavascript1 color="#f7df1e" />} name="Javascript" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiPhp color="#777BB4" />} name="PHP" />
                </motion.div>
               
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiFirebase color="#FFCB2B" />} name="FireBase" />
                </motion.div>
                
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<FcAndroidOs  color="#78C257" />} name="Android" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<FaWordpress  color="#21759b" />} name="Wordpress" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiPostman  color="#ef5b25" />} name="Postman" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<TbBrandCpp color="#00599C" />} name="CPP" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiThealgorithms color="#FF4500" />} name="DSA" />
                </motion.div>

                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiCanva color="#00C4CC" />} name="CANVA" />
                </motion.div>
                <motion.div
                    className="w-64"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <SkillCard icon={<SiMicrosoftoffice color="#FF4500" />} name="MS Office" />
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
