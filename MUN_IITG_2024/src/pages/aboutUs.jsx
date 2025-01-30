import Navbar from "../components/general/Navbar";
import Letter from "../components/aboutUs/letter";
import MeetTheTeam from "../components/aboutUs/meetTheTeam";
import PageHeader from "../components/general/pageHeader";
import { useState,useEffect } from "react";
import Mnavbar from '../components/general/mobile_nav'
import Footerm from "../components/general/Footerm";
const AboutUs = () => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
        setIsMobileView(window.innerWidth <= 600); // Adjust the width breakpoint as needed
    };

    // Initial check on component mount
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);
  return (
    <div className="w-full">
      <Mnavbar/>
          {!isMobileView && <Navbar />}
      <PageHeader title={"About Us"} color={"#FFE3BC"} />
      <div className="w-full flex relative flex-col items-center">
        <p className="lg:my-[11.6vh] py-5 px-[min(15.3vw,30px)] text-center w-[max(300px,80vw)] text-lg font-light md:text-base lg:font-extralight leading-[30px] text-[#192463] font-montserrat">
          The MUN, or the Model United Nations, is a simulation of the actual
          UN. The participants pretend to represent a nation, and come to
          together to discuss the very same issues being debated upon in the UN.
          This gives a normal person the opportunity to know what’s its like to
          stand for something more than himself/herself, and to experience the
          complicated the verbal dance and that politicians and delegates take
          part in everyday. The MUN is a conclave for ideation by the fresh
          minds of our nation, to brainstorm solutions to problems plaguing our
          world. Participants work through the tenuous relationships between
          nations as they deliberate towards a resolution – and they get to look
          nice in a suit and tie while they do it!
        </p>
      </div>
      <Letter />
      <MeetTheTeam/>
      <Footerm />
    </div>
  );
};

export default AboutUs;
