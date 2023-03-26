import { FaExternalLinkAlt } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import {  FaHackerrank } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { SiCodechef, SiCodeforces, SiGeeksforgeeks,SiLeetcode } from 'react-icons/si';

function CodingProfile() {
  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/King07/",
      icon: <SiLeetcode className=" text-4xl mr-4" />,
      description1: "Solved more than 350+ problems of DSA  && Participated in 10+ Contests",
      description2: "Highest Ratings :1541+",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/raj_yadav7",
      icon: <SiCodechef className=" text-4xl mr-4" />,
      description1: "Solved more than 100+ problems on Contests && Participated in 30+ Contests",
      description2: "Highest rating : 1613 with 3 star   ",
    },
    {
      name: "CodeForces",
      url: "https://codeforces.com/profile/raj_yadav",
      icon: <SiCodeforces className=" text-4xl mr-4" />,
      description1: " Solved more than 100+ DSA and CP problems in the past few months.",
      description2: "#Newbie Rated in the contest (max 947)",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/king07",
      icon: <FaHackerrank className=" text-4xl mr-4" />,
      description1: "Solved more than 100+ DSA and SQL in the past few months",
      description2: "Achieved Certificate in the sql and DSA",
    },
    {
      name: "GeeksforGeeks ",
      url: "https://auth.geeksforgeeks.org/user/rajyadav07/",
      icon: <SiGeeksforgeeks className="text-4xl mr-4" />,
      description1: "Solved more than 100+ DSA problems ",
      description2: "Ratings :nan",
    },
    // add more items here as needed
  ];

  return (
    <div className="bg-gray-900 text-white py-8 px-6">
      <h2 className="text-3xl font-bold mb-8">Coding Profile</h2>
      {codingProfiles.map((profile, index) => (
        <div key={index} className="flex flex-row items-center justify-between mb-4">
          {profile.icon}
          <div className="flex flex-col w-full py-2 px-4 bg-gray-800 rounded-lg shadow-md">
            <p className="text-lg font-medium truncate mb-2">{profile.name}</p>
            <div className="flex flex-row items-center text-green-500">
              <IoMdCheckmarkCircleOutline className="text-lg mr-2" />
              <p className="text-gray-400"> {profile.description1} </p>
            </div>
            <div className="flex flex-row items-center text-green-500">
              <FcRating className="text-lg mr-2" />
              <p className="text-gray-400"> {profile.description2} </p>
            </div>

            <a
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 font-medium mt-2 ml-auto"
              aria-label="Link to my coding profile"
            >
              <FaExternalLinkAlt className="text-white text-lg" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CodingProfile;
