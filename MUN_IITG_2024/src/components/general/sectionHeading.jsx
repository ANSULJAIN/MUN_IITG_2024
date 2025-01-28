const SectionHeading = ({title,color}) => {
    return ( 
        <div className="flex flex-row flex-nowrap px-9 w-full align-center justify-center items-center">
            <p className="mq350:text-[18px] font-raleway font-black mq520:text-xl text-2xl sm:text-3xl md:text-4xl mr-4 mq520:text-wrap text-nowrap" style={{color:color}}>{title}</p>
           
        </div>
     );
}
 
export default SectionHeading;