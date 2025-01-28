const PageHeader = ({title,subtitle, color}) => {
    // color="#EC1824";
    return ( 
        <div style={{backgroundColor:`${color}`}} className='w-full aspect-[calc(1440/512)]  flex flex-row justify-center sm:black sm:text-left text-white relative overflow-x-hidden' >
            <h2 className='text-[48px] sm:text-[60px] md:text-[90px] absolute font-raleway font-extrabold sm:left-[5%] bottom-[30%] text-[#EC1824]'>{title}</h2>
            <h4 className="text-black sm:left-[5%] bottom-[12%] absolute font-raleway md:text-[40px] font-bold" >{subtitle}</h4>
        </div>
     );
}
 
export default PageHeader;