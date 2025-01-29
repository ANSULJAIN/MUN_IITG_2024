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
<<<<<<< HEAD
      "Thanmai Sai Krishna",
      "Chief of Staff",
=======
      "Yoshita Banerjee",
      "Secretary General",
>>>>>>> a18978d1ff1c6546a24fef47589f75e090b99a52
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
        instagram:
          "https://www.instagram.com/prathamm2728?igsh=MWFwZ3RxMmYyd2kyMQ==",
      },
      pratham,
    ],
    [
      "Ansul Jain",
      "Director WebOps",
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
      "Yoshita Banerjee",
      "Secretary General",
      {
        linkedin: "https://www.linkedin.com/in/yoshita-banerjee-baaa6724b?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAD3qQ_IBlECwzPGUhB5yn6bgqlSXv1ggUQk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3B4C0g5oCATLSRtbFUEttqrQ%3D%3D",
        instagram:
          "https://www.instagram.com/adithyansunilk?igsh=OXR6NnRrbWVmeTU3",
      },
      adityan,
    ],
    [
<<<<<<< HEAD
      "Divya Mate",
      "Director General",
=======
      "K",
      "Director Webops",
>>>>>>> a18978d1ff1c6546a24fef47589f75e090b99a52
      {
        linkedin: "https://www.linkedin.com/in/divya-mate-1394152b5?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAEuzs30BqRsZeKrNp0etMSSdyFx_UHOTmwk&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BSQybnHcCR8au5NnWioaNaQ%3D%3D",
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