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
      "Samarth Jhunjhunwala",
      "Secretary General",
      {
        linkedin: "https://www.linkedin.com/in/samarth-jhunjhunwala/",
        instagram: "https://www.instagram.com/",
      },
      samarth,
    ],
    [
      "Pratham Garg",
      "Director General",
      {
        linkedin: "https://www.linkedin.com/in/pratham-garg2728/",
        instagram:
          "https://www.instagram.com/prathamm2728?igsh=MWFwZ3RxMmYyd2kyMQ==",
      },
      pratham,
    ],
    [
      "Vedika Garg",
      "Director of International Press",
      {
        linkedin: "https://www.linkedin.com/in/vedikag/",
        instagram:
          "https://www.instagram.com/confusion.o_o?igsh=eG1zcno3bjhpeTBx",
      },
      vedika,
    ],
    [
      "Kaustubh Dhote",
      "Director Logistics",
      {
        linkedin:
          "https://www.linkedin.com/in/kaustubh-dhote?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/kaus_theta_/?utm_source=qr&r=nametag",
      },
      kausth,
    ],
    [
      "Rishit Gupta",
      "Chief of Staff",
      {
        linkedin: "https://www.linkedin.com/in/rishit-gupta-ba1b9a24a/",
        instagram: "https://www.instagram.com/rishit718?igsh=dGRweDBvdzFxb3lm",
      },
      Rishith,
    ],
    [
      "Rishit Gupta",
      "Chief of Staff",
      {
        linkedin: "https://www.linkedin.com/in/rishit-gupta-ba1b9a24a/",
        instagram: "https://www.instagram.com/rishit718?igsh=dGRweDBvdzFxb3lm",
      },
      Rishith2,
    ],
    [
      "Rishit Gupta",
      "Chief of Staff",
      {
        linkedin: "https://www.linkedin.com/in/rishit-gupta-ba1b9a24a/",
        instagram: "https://www.instagram.com/rishit718?igsh=dGRweDBvdzFxb3lm",
      },
      Rishith3,
    ],
    [
      "Advaitaa Arun",
      "Director Marketing",
      {
        linkedin:
          "https://www.linkedin.com/in/advaitaa-arun?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        instagram:
          "https://www.instagram.com/advait_aa?igsh=MXd2OHp2ZjY5cnl0dw==",
      },
      advait,
    ],
    [
      "Abdul Basith K",
      "Director of Creative Content",
      {
        linkedin: "https://www.linkedin.com/in/basith-abk",
        instagram: "https://www.instagram.com/abdul_bk__?igsh=MXFtYXlia2I1bXRt",
      },
      basith,
    ],
  ];

  const team2 = [
    [
      "Adithyan Sunilkumar",
      "Director of Design",
      {
        linkedin: "http://www.linkedin.com/in/adi-sunilkumar",
        instagram:
          "https://www.instagram.com/adithyansunilk?igsh=OXR6NnRrbWVmeTU3",
      },
      adityan,
    ],
    [
      "Ketan Singh",
      "Director Webops",
      {
        linkedin: "https://www.linkedin.com/in/ketan-singh-iitg/",
        instagram: "https://www.instagram.com/botketan?igsh=M3F3NGlpMWprb3k4",
      },
      ketan,
    ],
  ];

  return (
    <div className="px-9 max-letter:px-4 py-10 mt-40 w-full relative overflow-hidden">
      <SectionHeading title={"Meet the Team"} color={"#051c46"} />
      <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-x-3 gap-y-5 justify-items-center mx-auto my-16 ">
        {team2.map(([name, position, socialMedia, img]) => (
          <TeamCard
            key={name}
            name={name}
            position={position}
            socialMedia={socialMedia}
            img={img}
          />
        ))}
      </div>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-5 justify-items-center mx-auto my-16 ">
        {team.map(([name, position, socialMedia, img]) => (
          <TeamCard
            key={name}
            name={name}
            position={position}
            socialMedia={socialMedia}
            img={img}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;