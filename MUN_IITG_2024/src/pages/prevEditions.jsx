import Timeline from "../components/PrevEditions/timeline";
import Navbar from "../components/general/Navbar";
import Footerm from "../components/general/Footerm";
import PageHeader from "../components/general/pageHeader";
import { useState,useEffect } from "react";
import Mnavbar from '../components/general/mobile_nav'

const PrevEditions = () => {
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
        <div className="overflow-x-hidden">
            <Mnavbar/>
          {!isMobileView && <Navbar />}
            <PageHeader title={'Our Previous Editions'} color={'#FFE3BC'}/>
            <Timeline/>
            <Footerm/>
        </div>
     );
}
 
export default PrevEditions;