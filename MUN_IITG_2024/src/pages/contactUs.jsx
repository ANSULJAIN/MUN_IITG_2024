import ContactDetails from "../components/contactUs/contactDetails";
import Map from "../components/contactUs/map";
import Navbar from "../components/general/Navbar";
import PageHeader from "../components/general/pageHeader";
import SectionHeading from "../components/general/sectionHeading";
import { useState,useEffect } from "react";
import Mnavbar from '../components/general/mobile_nav'
import Footerm from "../components/general/Footerm";
const ContactUs = () => {
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
        
        <>
            <Mnavbar/>
          {!isMobileView && <Navbar />}
            <PageHeader title={'For more queries'} color={'#FFE3BC'}/>
            <ContactDetails/>
            <Map/>
            <Footerm />
        </>
     );
}
 
export default ContactUs;