import { FaExternalLinkAlt } from 'react-icons/fa';
import { FcRating } from 'react-icons/fc';
import { FaHackerrank } from 'react-icons/fa';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from 'react-icons/si';
import { useTrail, animated } from 'react-spring';

function CodingProfile() {
  const codingProfiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/King07/",
      icon: <SiLeetcode className="text-4xl mr-4" />,
      description1: "Solved more than 350+ problems of DSA && Participated in 10+ Contests",
      description2: "Highest Ratings: 1541+",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/raj_yadav7",
      icon: <SiCodechef className="text-4xl mr-4" />,
      description1: "Solved more than 100+ problems on Contests && Participated in 30+ Contests",
      description2: "Highest rating: 1613 with 3 stars",
    },
    {
      name: "CodeForces",
      url: "https://codeforces.com/profile/raj_yadav",
      icon: <SiCodeforces className="text-4xl mr-4" />,
      description1: "Solved more than 100+ DSA and CP problems in the past few months.",
      description2: "#Newbie Rated in the contest (max 947)",
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/king07",
      icon: <FaHackerrank className="text-4xl mr-4" />,
      description1: "Solved more than 100+ DSA and SQL in the past few months",
      description2: "Achieved Certificate in SQL and DSA",
    },
    {
      name: "GeeksforGeeks",
      url: "https://auth.geeksforgeeks.org/user/rajyadav07/",
      icon: <SiGeeksforgeeks className="text-4xl mr-4" />,
      description1: "Solved more than 100+ DSA problems",
      description2: "Ratings: NaN",
    },
  ];

  const trail = useTrail(codingProfiles.length, {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    from: { opacity: 0, transform: 'translate3d(0, 50px, 0)' },
    delay: 200,
  });

  return (
    <div className="bg-gray-900 text-white py-8 px-6">
      <h2 className="text-3xl font-bold mb-8">Coding Profile</h2>
      {trail.map((animationProps, index) => (
        <animated.div key={index} className="flex flex-row items-center justify-between mb-4" style={animationProps}>
          {codingProfiles[index].icon}
          <div className="bg-gray-700  flex flex-col w-full py-2 px-4 rounded-lg shadow-md">
            <p className="text-lg font-medium truncate mb-2">{codingProfiles[index].name}</p>
            <div className="flex flex-row items-center text-green-500">
              <IoMdCheckmarkCircleOutline className="text-lg mr-2" />
              <p className="text-white"> {codingProfiles[index].description1} </p>
            </div>
            <div className="flex flex-row items-center text-green-500">
              <FcRating className="text-lg mr-2" />
              <p className="text-white"> {codingProfiles[index].description2} </p>
            </div>

            <a
              href={codingProfiles[index].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300 font-medium mt-2 ml-auto"
              aria-label="Link to my coding profile"
            >
              <FaExternalLinkAlt className="text-white text-lg" />
            </a>
          </div>
        </animated.div>
      ))}
    </div>
  );
}

export default CodingProfile;
