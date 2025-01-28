import SectionHeading from "../general/sectionHeading";

const Map = () => {
    return ( 
        <div className="w-full md:p-9 py-14"> {/* Removed the red background color */}
            <SectionHeading title={''} color={'#F8506B'} />
            <div className="flex flex-row justify-center md:p-10 py-0">
                <iframe 
                    title="gmap" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.1707942310522!2d91.68997207492302!3d26.191121790728822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5ac17d2b58d7%3A0xb853cd7b55039193!2sIIT%20Guwahati%20Conference%20Hall!5e0!3m2!1sen!2sin!4v1708416974366!5m2!1sen!2sin"
                    width="100%" 
                    height="490"  
                    allowFullScreen={true} 
                    loading="fast" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}
export default Map;