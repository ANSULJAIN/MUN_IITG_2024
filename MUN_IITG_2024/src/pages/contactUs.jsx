import ContactDetails from "../components/contactUs/contactDetails";
import Map from "../components/contactUs/map";
import Navbar from "../components/general/Navbar";
import PageHeader from "../components/general/pageHeader";
import { useState, useEffect } from "react";
import Mnavbar from '../components/general/mobile_nav';
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
            <Mnavbar />
            {!isMobileView && <Navbar />}
            <div>
                <PageHeader title={"For more queries"} color={'#FFE3BC'} subtitle={"We'd love to hear from you"}/>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-start w-full px-2 mx-auto my-16">
                <div className="md:w-1/3 flex flex-col justify-start"> {/* Ensure this is a column layout */}
                    <ContactDetails />
                </div>
                <div className="md:w-2/3 flex justify-center"> {/* Center the map */}
                    <Map />
                </div>
            </div>
            <Footerm />
        </>
    );
}

export default ContactUs;