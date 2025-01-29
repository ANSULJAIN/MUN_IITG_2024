import ketan from "../../assets/aboutUs/Profile 4.png";
import adityan from "../../assets/aboutUs/Profile 5.png";
import pratham from "../../assets/aboutUs/Profile 6.png";
import samarth from "../../assets/aboutUs/Profile 7.png";
import advait from "../../assets/aboutUs/Profile 8.png";
import basith from "../../assets/aboutUs/Profile 12.png";
import kausth from "../../assets/aboutUs/Profile 13.png";
import vedika from "../../assets/aboutUs/Profile 14.png";
import Rishith from "../../assets/aboutUs/Profile 15.png";
import Rishith2 from "../../assets/aboutUs/Profile 16.png";
import Rishith3 from "../../assets/aboutUs/Profile 17.png";

import TeamCard from "./teamCard";
import SectionHeading from "../general/sectionHeading";

const MeetTheTeam = () => {
  const team = [
    [
      "Thanmai Sai Krishna",
      "Chief of Staff",
      {
        linkedin: "https://www.linkedin.com/in/thanmai-sai-krishnan-mudavath-b9974524a/",
        instagram: "https://www.instagram.com/",
      },
      samarth,
    ],
    [
      "Ashutosh Balasubramaniam",
      "Director General",
      {
        linkedin: "https://www.linkedin.com/in/ashutosh-balasubramaniam-03106a258/",
        instagram: "https://www.instagram.com/prathamm2728?igsh=MWFwZ3RxMmYyd2kyMQ==",
      },
      pratham,
    ],
    [
      "Ansul Jain",
      "Director WebOps",
      {
        linkedin: "https://www.linkedin.com/in/vedikag/",
        instagram: "https://www.instagram.com/confusion.o_o?igsh=eG1zcno3bjhpeTBx",
      },
      vedika,
    ],
    [
      "Ayush Kumar",
      "Director of Public Relations and Outreach",
      {
        linkedin: "https://www.linkedin.com/in/ayush-kumar-235344254",
        instagram: "https://www.instagram.com/kaus_theta_/?utm_source=qr&r=nametag",
      },
      kausth,
    ],
    [
      "Dhyani Patel",
      "Director Administration",
      {
        linkedin: "https://www.linkedin.com/in/dhyani-patel-/",
        instagram: "https://www.instagram.com/rishit718?igsh=dGRweDBvdzFxb3lm",
      },
      Rishith,
    ],
    [
      "Aarohan Gupta",
      "Director Delegate Affairs",
      {
        linkedin: "https://www.linkedin.com/in/aarohan-gupta/",
        instagram: "https://www.instagram.com/rishit718?igsh=dGRweDBvdzFxb3lm",
      },
      Rishith2,
    ],
    [
      "Rayansh Khamesra",
      "Director Marketing",
      {
        linkedin: "https://www.linkedin.com/in/rayansh-khamesra/",
        instagram: "https://www.instagram.com/rishit718?igsh=dGRweDBvdzFxb3lm",
      },
      Rishith3,
    ],
    [
      "Aman Gahukar",
      "Director of Creative Content",
      {
        linkedin: "https://www.linkedin.com/in/amanprashant/",
        instagram: "https://www.instagram.com/advait_aa?igsh=MXd2OHp2ZjY5cnl0dw==",
      },
      advait,
    ],
    [
      "Harishankar Yadav",
      "Director Logistics",
      {
        linkedin: "https://www.linkedin.com/in/harishankar-yadav-7386a1280/",
        instagram: "https://www.instagram.com/abdul_bk__?igsh=MXFtYXlia2I1bXRt",
      },
      basith,
    ],
  ];

  const team2 = [
    [
      "Yoshita Banerjee",
      "Secretary General",
      {
        linkedin: "https://www.linkedin.com/in/yoshita-banerjee-baaa6724b",
        instagram: "https://www.instagram.com/adithyansunilk?igsh=OXR6NnRrbWVmeTU3",
      },
      adityan,
    ],
    [
      "Divya Mate",
      "Director General",
      {
        linkedin: "https://www.linkedin.com/in/divya-mate-1394152b5",
        instagram: "https://www.instagram.com/botketan?igsh=M3F3NGlpMWprb3k4",
      },
      ketan,
    ],
  ];

  return (
    <div className="px-9 max-letter:px-4 py-10 mt-40 w-full relative overflow-hidden">
      <SectionHeading title={"Meet the Team"} color={"#051c46"} />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-x-3 gap-y-5 justify-items-center mx-auto my-16">
        {team2.map(([name, position, socialMedia, img]) => (
          <TeamCard key={name} name={name} position={position} socialMedia={socialMedia} img={img} />
        ))}
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 justify-items-center mx-auto my-16">
        {team.map(([name, position, socialMedia, img]) => (
          <TeamCard key={name} name={name} position={position} socialMedia={socialMedia} img={img} />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
